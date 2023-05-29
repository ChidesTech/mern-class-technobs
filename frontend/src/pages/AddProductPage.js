import { useState } from "react"
import Swal from "sweetalert2";
import axios from "../../node_modules/axios/index";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import http from "../http";

export default function AddProductPage(){
    const [error, setError] = useState("");
    const [title , setTitle] = useState("");
    const [price, setPrice] = useState();
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    // async function 
    async function submitHandler(e){
       e.preventDefault();
       const {data} = await http.post("/products", {title, image, price, description})
     if(data.error){
        setError(data.error)
     }
       if(data.success){
        Swal.fire("Done")
        navigate("/admin-products")
      }
    }
    return <>
     <div className="login mt-3">
      <form onSubmit={submitHandler} action="" className="form  col-sm-12">
        <h2 className="mb-3 text-center">Add Product</h2>
        <input onChange={e => setTitle(e.target.value)} type="text" className="form-control mb-3" placeholder="Title" />
        <input onChange={e => setPrice(e.target.value)} type="number" className="form-control mb-3" placeholder="Price"/>
        <input onChange={e => setImage(e.target.value)} type="text" className="form-control mb-3" placeholder="Image"/>
        <input onChange={e => setDescription(e.target.value)} type="text" className="form-control mb-3" placeholder="Description"/>
        <button className="btn btn-primary form-control mb-3">Add Product</button>
      

      </form>
    </div></>
}