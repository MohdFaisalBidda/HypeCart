const router =require("express").Router();
const product =require("../data")


router.get("/",(req,res)=>{
    try {
        res.json(product);
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;