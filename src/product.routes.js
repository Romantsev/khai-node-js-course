const express = require('express');
const { eq } = require('drizzle-orm');
const db = require('./db');
const { products } = require('./db/schema');
const { blockSpecialBrand } = require('./middleware');

const router = express.Router();

// handle get request for path /products
router.get('/products', async (request, response) => {
    const allProducts = await db.select().from(products);

    return response.json(allProducts);
});

// handle get request for path /products/:brand
router.get('/products/:brand', blockSpecialBrand, async (request, response) => {
    const { brand } = request.params; // Access the brand parameter from the URL

    const filteredProducts = await db
        .select()
        .from(products)
        .where(eq(products.brand, brand));

    response.json(filteredProducts); // Send the filtered products as a JSON response
});

router.get('/productswitherror', (request, response) => {
    let err = new Error("processing error ")
    err.statusCode = 400
    throw err
});


module.exports = router;
