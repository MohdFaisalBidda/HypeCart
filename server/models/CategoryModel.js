const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String },
    stock: { type: Number, required: true }
},
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);