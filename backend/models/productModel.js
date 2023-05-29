const mongoose = require ("mongoose");

const productSchema = new mongoose.Schema({
 title: {type : String},
 price : {type : Number},
 image : {type : String},
 description: {type : String}
}, {timestamps : true})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

