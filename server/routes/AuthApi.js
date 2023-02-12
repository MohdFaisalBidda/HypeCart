const express = require("express")
const router = express.Router();
const { mongoose } = require("mongoose");
const NEWUser = require("../models/UserModel")


router.get("/register", async (req, res) => {
    try {
        const users = await NEWUser.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(400).json({message:err.message});
    }
})



router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    const user = new NEWUser({
        firstName, lastName, email, password
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
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