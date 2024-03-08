const Router = require('express').Router

const {createProduct} =require("./controllers/createProductController");
const { getAllProduct } = require('./controllers/getAllProductController');
const { getProduct } = require('./controllers/getProductController');
const { updateProduct } = require('./controllers/updateProductController');

const routes = Router();

routes.post("/products",createProduct);
routes.get("/products",getAllProduct);
routes.get("/products/:id",getProduct);
routes.put("/products/:id",updateProduct);


module.exports = {routes}
