const  ImportData =require("express").Router();
const Product =require("../server/models/ProductModel");
const Category = require("./models/CategoryModel");
const products = require("./ProductData");
const catData = require("./catData");


ImportData.post("/products",async(req,res)=>{
    try {
        await Product.deleteMany({});
        const importProducts =await Product.insertMany(products);
        res.status(200).send({importProducts});
        
    } catch (error) {
        res.status(404).send(error);
    }
});

ImportData.post("/categories",async(req,res)=>{
    try {
        await Category.deleteMany({});
        const importCategories =await Category.insertMany(catData);
        res.status(200).send({importCategories});
        
    } catch (error) {
        res.status(404).send(error);
    }
});
ImportData.get("/categories",async(req,res)=>{
    try {
        const category = await Category.find();
        res.status(200).send(category);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = ImportData;

