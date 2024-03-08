const pg = require('pg');
const db = new pg.Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "senha"
});
db.connect();

const tableCreate = "CREATE TABLE IF NOT EXISTS products (    id SERIAL PRIMARY KEY,    name VARCHAR(255),    description VARCHAR(255),    value INT);"

db.query(tableCreate, [], (err, result) => {
    if (err) console.log("Error: " + err)
    console.log(result)
});


module.exports={db}