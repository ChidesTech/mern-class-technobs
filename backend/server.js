const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userModel");
const Product = require("./models/productModel");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Node Server Is Running");
});


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// create a database connection
mongoose.connect("mongodb+srv://mernclass:mernclasspassword@cluster0.2raujid.mongodb.net/?retryWrites=true&w=majority")
.then(res => console.log("MongoDB connected"))
.catch (err => console.log(err));



app.listen(5000, ()=> {
    console.log("Listening on port 5000");
})