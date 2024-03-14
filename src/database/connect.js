const pg = require('pg');
const connectionString = process.env.DATABASE_URL;

const db = new pg.Client({connectionString});
db.connect();

const tableCreate = "CREATE TABLE products (    id SERIAL PRIMARY KEY,    name VARCHAR(255), img_url VARCHAR(255),   description VARCHAR(255),    value INT);"

db.query(tableCreate, [], (err, result) => {
    if (err) console.log("Error: " + err)
});


module.exports={db}
