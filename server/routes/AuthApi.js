const express = require("express")
const router = express.Router();
const { mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/UserModel")


router.get("/register", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})



router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const existsUser = await User.findOne({ email })

    if(existsUser){
        res.status(406).json({message:"User already exists"})
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
        firstName, lastName, email, password: hashedPassword
    });

    try {
        const userData = await newUser.save();
        res.status(201).json(userData);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

    console.log(req.body);

})



router.get("/login", (req, res) => {
    res.json();
})



router.post("/login", (req, res) => {
    res.json();
})



module.exports = router;