const { db } = require("../database/connect");

async function getProduct(request, response) {
    try {
        const {id} = request.params

        const existedProduct = (await db.query("SELECT * FROM products WHERE id=$1",[id])).rows;

        if(!existedProduct[0]){
            return response.status(401).send("product not existed");
        }

        const query = "SELECT * FROM products WHERE id=$1;"
        const result = (await db.query(query,[id])).rows;
        return response.status(200).json(result)
    } catch (error) {
        console.error(error)
    }
}
module.exports = { getProduct }