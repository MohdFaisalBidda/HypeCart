const User = require("../models/UserModel");

const router = require("express").Router();

//UPDATE user
router.put("/:id", async (req, res) => {

    if (req.body.password) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        req.body.password =hashedPassword;
    }

    try {
        const updatedUser =await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})

        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500).json(error);
    }

})


//DELETE user

router.delete("/:id",async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json(error);

    }

})

//Get User
// TODO: get all users by only admin
router.get("/find/:id",async(req,res)=>{
    try {
        if(req.body.isAdmin){
            const user =await User.findById(req.params.id);
            res.status(200).json(user);
        }
        else{
            res.status(404).json("you are not allowed to do that!")
        }
    } catch (error) {
        res.status(500).json(error);
    }
})


//Get All User
router.get("/",async(req,res)=>{
    try {
        const user =await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;