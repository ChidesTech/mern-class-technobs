const express = require("express");
const { isValidObjectId } = require("mongoose");
const Product = require("../models/productModel");
const productRoutes = express.Router();



//CREATE A NEW PRODUCT
productRoutes.post("/", async (req, res) => {
    let product = new Product(req.body);
    product = await product.save();
    if(product){
        res.send({success : "Product saved"})
    }else{
        res.send({error : 'Product save failed'})
    }
})

//GET ALL PRODUCTS
productRoutes.get("/", async (req, res) => {
    const products = await Product.find();
    res.send(products)
    // console.log(products)
});


//DELETE A PRODUCT ROUTE
productRoutes.delete("/:id", async (req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id)){
        res.send({error : "The ID of the product is invalid"});
        return;
       }
    const deletedProduct = await Product.findByIdAndDelete(id);
    if(deletedProduct){
        res.send({success : "Product Deleted"})
    }else{
        res.send({error : "Error deleting product"})
    }
})

//GET A SINGLE PRODUCT
productRoutes.get("/:id", async (req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id)){
        res.send({error : "The ID of the product is invalid"});
        return;
       }
       //Get the product
       const product = await Product.findById(id)
       res.send(product);
    //    console.log(product)
})

//UPDATE A PRODUCT
productRoutes.put("/:id", async(req, res) => {
    const id = req.params.id;
    if(!isValidObjectId(id)){
        res.send({error : "The ID of the product is invalid"});
        return;
       }
       const product = await Product.findById(id);
       //Update the product information
       product.title = req.body.title;
       product.price = req.body.price;
       product.description = req.body.description;
       //Save the updated product
       let updatedProduct = await product.save();
       if(updatedProduct){
        res.send({success : "Product Updated Successfully"})
       }else{
        res.send({error : "Error updating product"})
       }

})

module.exports = productRoutes;