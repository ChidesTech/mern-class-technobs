const express = require("express");
const User = require("../models/userModel");
const userRoutes = express.Router();

userRoutes.post("/register", async (req, res) => {
    //Check if the email already exists
    const existingUser = await User.findOne({email : req.body.email});
    if(existingUser){
        res.send({error : "This email has already been used"});
        return;
    }
    //Create a new user
    const newUser = new User({
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        isAdmin : false
    })

    //Save the new user
    const savedUser = await newUser.save();
    if(savedUser){
        res.send({success : "Registration Successful"})
    }else{
        res.send({error : "Error saving user"})
    }
});

userRoutes.post("/login", async(req, res) => {
    const existingUser = await User.findOne({email : req.body.email});
    if(!existingUser){
        res.send({error : "No User By This Email Exists"})
        return;
    }
    

})



module.exports = userRoutes;