require("dotenv").config();
const mongoose = require("mongoose")

mongoose.set('strictQuery', false);
const db = mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })

db ? console.log("Connected to DB") : console.log("error");

module.exports =db;