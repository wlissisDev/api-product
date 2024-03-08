const { db } = require("../database/connect");

async function deleteProduct(request, response) {
    try {
        const { id } = request.params

        const existedProduct = (await db.query("SELECT * FROM products WHERE id=$1",[id])).rows;

        if(!existedProduct[0]){
            return response.status(401).send("product not existed");
        }

        const query = " DELETE FROM products WHERE id = $1;"
        const result = (await db.query(query, [id])).command;

        return response.status(200).json(result)
    } catch (error) {
        console.error(error)
    }
}
module.exports = { deleteProduct }