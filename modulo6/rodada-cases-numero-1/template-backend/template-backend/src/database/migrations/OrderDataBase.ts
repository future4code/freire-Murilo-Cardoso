import { BaseDatabase } from "../BaseDatabase"
import { Pizza } from "../../models/Pizza"
import { IPizzaDB } from "../../models/Pizza"


export class OrderDataBase extends BaseDatabase {
    public static TABLE_ORDERS = "Amb_Order"
    public static TABLE_ORDER_ITEMS = "Amb_Order_Items"

    public toPizzaDBModel = (pizza: Pizza): IPizzaDB => {
    
        return {
           name: pizza.getName(),
           price: pizza.getPrice()
        }
}
    /* public findByEmail = async (email: string): Promise<IUserDB | undefined> => {
        const result: IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })

        return result[0]
    }

    public createUser = async (user: User): Promise<void> => {
        const userDB = this.toUserDBModel(user)

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(userDB)
    } */
}