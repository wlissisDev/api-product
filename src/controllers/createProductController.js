const { db } = require("../database/connect");

async function createProduct(request, response) {
    try {
        const { name, description, value } = request.body;

        if(name == null || description == null || value == null){
            return response.status(401).send("invalid request value");
        }
       

        const query = "INSERT INTO products(name, description, value) VALUES($1,$2,$3);"
        await db.query(query, [name, description, value]);
        return response.status(201).send("created")
    } catch (error) {
        console.error(error)
    }
}
module.exports = { createProduct }