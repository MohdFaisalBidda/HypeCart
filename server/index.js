require("dotenv").config()
const express = require("express");
const db = require("./db")
const app = express()
const bodyParser = require("body-parser")
const Auth =require("./routes/auth")
const Products =require("./routes/products")
const Users =require("./routes/user")
const cors =require("cors");
const passport =require("passport")
const passportConfig =require("./config/passport")

app.use(express.json())
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
passportConfig(passport);
app.use("/api/auth",Auth);
app.use("/api/users",Users)
app.use("/api/products",Products);


app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server running at http://localhost:5000`);
})