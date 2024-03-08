const { db } = require("../database/connect");

async function getAllProduct(request, response) {
    try {
        const query = "SELECT * FROM products;"
        const result = (await db.query(query)).rows;
        return response.status(200).json(result)
    } catch (error) {
        console.error(error)
    }
}
module.exports = { getAllProduct }