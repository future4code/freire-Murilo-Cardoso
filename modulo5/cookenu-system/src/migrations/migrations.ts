import connection from "../connection";
import {userTableName,  recipeTableName } from "../types"


connection.raw(`
    CREATE TABLE IF NOT EXISTS ${userTableName}(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR (255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ${recipeTableName}(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(2000) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
    );
    
`).then(()=> console.log(
    "As tabelas foram criadas com sucesso!"
)).catch(error =>
        console.log(error.message)
).finally(()=>{
    connection.destroy
})
