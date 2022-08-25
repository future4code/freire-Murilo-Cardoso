import knex from "knex";

 const connection = knex({
    client: "mysql",
    connection: {
        host:"",
        port:,
        user:"",
        password:"",
        database:"",
        multipleStatements:true

    }
});
export default connection