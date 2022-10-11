import { BaseDatabase } from "../BaseDatabase"
import { PizzaDataBase } from "../PizzaDatabase"
import { OrderDataBase } from "./OrderDataBase"

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

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${OrderDataBase.TABLE_ORDER_ITEMS};
        DROP TABLE IF EXISTS ${OrderDataBase.TABLE_ORDERS};
        DROP TABLE IF EXISTS ${PizzaDataBase.TABLE_PIZZA_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDataBase.TABLE_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDataBase.TABLE_PIZZAS};


        CREATE TABLE IF NOT EXISTS ${PizzaDataBase.TABLE_PIZZAS} (
            name VARCHAR(255) PRIMARY KEY,
            price DECIMAL(3,2) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${PizzaDataBase.TABLE_INGREDIENTS}(
            name VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${PizzaDataBase.TABLE_PIZZA_INGREDIENTS}(
            pizza_name VARCHAR(255) NOT NULL,
            ingredient_name VARCHAR(255) NOT NULL,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas(name),
            FOREIGN KEY (ingredient_name) REFERENCES Amb_Ingredients(name)
        );
        
        CREATE TABLE IF NOT EXISTS ${OrderDataBase.TABLE_ORDERS}(
            id VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS ${OrderDataBase.TABLE_ORDER_ITEMS}(
            id VARCHAR(255) PRIMARY KEY,
            pizza_name VARCHAR(255) NOT NULL,
            quantity TINYINT,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas(name)
        );
        `)
    }

    insertData = async () => {
/*         await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users) */
    }
}

const migrations = new Migrations()
migrations.execute()