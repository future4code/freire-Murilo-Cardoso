import { BaseDatabase } from "../BaseDatabase"
import { UserDatabase } from "../UserDatabase"
import { users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

/*  DROP TABLE IF EXISTS ${UserDatabase.TABLE_SHOWS};
    DROP TABLE IF EXISTS ${UserDatabase.TABLE_TICKETS}; */

    createTables = async () => {
        await BaseDatabase.connection.raw(`

        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};


        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        
        CREATE TABLE IF NOT EXISTS Template_Lama_Shows(
            id VARCHAR(255) PRIMARY KEY,
            band VARCHAR(255) NOT NULL,
            start_at DATE NOT NULL
        );
            
        CREATE TABLE IF NOT EXISTS Template_Lama_Tickets(
            id VARCHAR(255) PRIMARY KEY,
            show_id VARCHAR(255) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (show_id) REFERENCES Template_Lama_Shows(id),
            FOREIGN KEY (user_id) REFERENCES Template_Lama_Users(id)
        );
    `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()