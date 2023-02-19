const  ImportData =require("express").Router();
const Product =require("../server/models/ProductModel")
const products = require("./ProductData");


ImportData.post("/products",async(req,res)=>{
    try {
        await Product.deleteMany({});
        const importProducts =await Product.insertMany(products);
        res.status(200).send({importProducts});
        
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = ImportData;

