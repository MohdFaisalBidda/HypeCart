const Product = require("../models/ProductModel");

const router = require("express").Router();


router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json(error);
    }
})
/*
products route with query parameter for categories
*/
// router.get("/", async (req, res) => {
//     try {
//         const qCategory=req.query.category;
//         let products;
//         if(qCategory){
//              products =await Product.find(
//                 {category:{$in:[qCategory]
//                 },
//             })
//         }else{
//         products = await Product.find();
//         res.status(200).json(products);
//         }
//     } catch (error) {
//         res.status(404).json(error);
//     }
// })

router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json([product]);
    } catch (error) {
        res.status(404).json(error);
    }
})


module.exports = router;