require("dotenv").config()
const express = require("express");
const db = require("./db")
const app = express()
const bodyParser = require("body-parser")
const Auth =require("./routes/auth")
const Products =require("./routes/products")
const Orders =require("./routes/order")
const Users =require("./routes/user")
const cors =require("cors");
const passport =require("passport")
const passportConfig =require("./config/passport");
const ImportData = require("./DataImport");

app.use(express.json())
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
passportConfig(passport);
app.use("/",ImportData);
app.use("/api/auth",Auth);
app.use("/api/users",Users)
app.use("/api/products",Products);
app.use("/api/orders",Orders);


app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`Server running at port ${process.env.PORT}`);
})