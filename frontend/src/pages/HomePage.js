import { useState } from "react";
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import Carousel from "../components/Carousel"
import http from "../http";
import Swal from "sweetalert2"


export default function HomePage() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  async function getProducts() {
   const {data} = await http.get("/products")
   
   setProducts(data)
   
  }

  function addToCart(product){
    //Check if item already exists in cart, return if it does
    const existingItem = cartItems.find(x => x._id === product._id);
    if(existingItem){
        Swal.fire("Already Added", "Item is already in cart", "warning")
        return;
    }
    //Storing in localStorage
    //Can only store string and JSON.stringify() converts other data types to strings
    product.quantity = 1;
     localStorage.setItem("cartItems", JSON.stringify([...cartItems, product]));
     Swal.fire("Item Added To Cart");
     navigate("/cart")

  }

  

    useEffect(() => {
    getProducts()
    },[])
    return <>
        <Carousel></Carousel>
        <div className="container mt-5">
            <div className="row">
                {products.map(x => {
                    return     <div className="col" key={x._id}>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={x.image} className="card-img-top" alt="..." /> 
                        <div className="card-body">
                            <h5 className="card-title">{x.title}</h5>
                            <p className="card-text">${x.price}</p>
         <div onClick={() => addToCart(x)} className="btn btn-primary w-100 w-100">Add To Cart <i className="fa fa-cart-plus"></i></div>
                        </div>
                    </div>
                </div>
                })}










            </div>
        </div>
    </>
}