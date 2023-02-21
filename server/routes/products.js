const Product = require("../models/ProductModel");

const router = require("express").Router();


router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(404).send(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).send([product]);
    } catch (error) {
        res.status(404).send(error);
    }
})


module.exports = router;