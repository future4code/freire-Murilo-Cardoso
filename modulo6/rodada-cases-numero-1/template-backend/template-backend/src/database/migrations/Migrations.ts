import { BaseDatabase } from "../BaseDatabase"
import { PizzaDataBase, UserDatabase } from "../PizzaDatabase"

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
        DROP TABLE IF EXISTS Amb_Order_Items;
        DROP TABLE IF EXISTS Amb_Order;
        DROP TABLE IF EXISTS ${PizzaDataBase.TABLE_PIZZA_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDataBase.TABLE_INGREDIENTS};
        DROP TABLE IF EXISTS ${PizzaDataBase.TABLE_PIZZAS};




        CREATE TABLE IF NOT EXISTS Amb_Pizzas (
            name VARCHAR(255) PRIMARY KEY,
            price DECIMAL(3,2) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Amb_Ingredients(
            name VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS Amb_Pizzas_Ingredients(
            pizza_name VARCHAR(255) NOT NULL,
            ingredient_name VARCHAR(255) NOT NULL,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas(name),
            FOREIGN KEY (ingredient_name) REFERENCES Amb_Ingredients(name)
        );
        
        CREATE TABLE IF NOT EXISTS Amb_Orders(
            id VARCHAR(255) PRIMARY KEY
        );

        CREATE TABLE IF NOT EXISTS Amb_Order_Items(
            id VARCHAR(255) PRIMARY KEY,
            pizza_name VARCHAR(255) NOT NULL,
            quantity TINYINT,
            FOREIGN KEY (pizza_name) REFERENCES Amb_Pizzas(name)
        );

        CREATE TABLE IF NOT EXISTS Amb_Orders_Order_Items(
            order_id VARCHAR(255) NOT NULL, 
            item_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (order_id) REFERENCES Amb_Orders (id),
            FOREIGN KEY (item_id) REFERENCES Amb_Order_Items (id)
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