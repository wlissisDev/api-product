const { db } = require("../database/connect");

async function updateProduct(request, response) {
    try {
        const { id } = request.params
        const { name, description, value, img_url } = request.body;

        const existedProduct = (await db.query("SELECT * FROM products WHERE id=$1",[id])).rows;

        if(!existedProduct[0]){
            return response.status(401).send("product not existed");
        }

        
        if(name == null || description == null || value == null){
            return response.status(401).send("invalid request value");
        }
        
        const query = " UPDATE products SET name = $1, description = $2, value = $3  img_url=$4 WHERE id = $5;"
        
        const result = (await db.query(query, [name, description, value, img_url,id])).command

        return response.status(200).json(result);
    } catch (error) {
        console.error(error)
    }
}
module.exports = { updateProduct }