import connection from "./connection";

const userTableName = "cookenu_users"
const recipeTableName = "cookenu_recipes"

try {
    connection.raw(`
    CREATE TABLE ${userTableName}(
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR (255) NOT NULL
    );

    CREATE TABLE ${recipeTableName}(
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(2000) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
    );
    
    `)
} catch (error:any) {

    
}