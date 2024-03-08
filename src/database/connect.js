const pg = require('pg');
const connectionString = "postgres://postgres:senha@localhost:5432/postgres";

const db = new pg.Client({connectionString});
db.connect();

const tableCreate = "CREATE TABLE IF NOT EXISTS products (    id SERIAL PRIMARY KEY,    name VARCHAR(255),    description VARCHAR(255),    value INT);"

db.query(tableCreate, [], (err, result) => {
    if (err) console.log("Error: " + err)
});


module.exports={db}