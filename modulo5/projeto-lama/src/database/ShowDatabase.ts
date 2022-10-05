import { BaseDatabase } from "./BaseDatabase";
import { IShowDB } from "../models/Show";

class ShowDatabase extends BaseDatabase {

    public static TABLE_SHOWS = "Template_Lama_Shows"
    public findShowByDate = async(date:Date): Promise<IShowDB | undefined>=>{
        const result: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({starts_at:date})

        return result[0]
    }

}

export default ShowDatabase