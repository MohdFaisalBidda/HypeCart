require("dotenv").config()
const express = require("express");
const db = require("./db")
const bodyParser = require("body-parser")
const AuthApi =require("./routes/AuthApi")
const cors =require("cors");

const app = express()

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use("/auth",AuthApi);


app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server running at http://localhost:5000`);
})