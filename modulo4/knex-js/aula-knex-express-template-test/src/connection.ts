import knex from "knex";

 const connection = knex({
    client: "mysql",
    connection: {
        host:"35.226.146.116",
        port:3306,
        user:"freire-murilo-cardoso",
        password:"a3ApcmTtPiU8dqefiEao",
        database:"freire-murilo-cardoso",
        multipleStatements:true

    }
});
export default connection