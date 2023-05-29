import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import axios from "../../node_modules/axios/index"
import http from "../http";


export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
   const {data} = await http.get("/products")
   console.log(data)
   setProducts(data)
   
  }

  async function deleteHandler(id){
  const {data} = await http.delete(`/products/${id}`)
  if(data.error){
    Swal.fire("Error", data.error, "error")
  }
  if(data.success){
    Swal.fire("Done", data.success, "success");
    //Run the getProducts function to get all product except the product 
    //that has just been deleted
    getProducts();
   }
}


  useEffect(() => {
    getProducts()
  }, [])

  return <>
    <section style={{ backgroundColor: '#eee' }}>

      <div className="container py-5">
        <div className="d-flex justify-content-between container mb-3">
          <h4>Admin Products</h4>
          <Link to="/add-product"> <button className="btn btn-primary">Add Product</button> </Link>
        </div>
       {products.map(x => {
        return  <div className="row justify-content-center mb-3">
        <div className="col-md-12 col-xl-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src={x.image} className="w-100" />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }} />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 text-ca">
                  <h5>{x.title}</h5>
                  <p className="text-truncate mb-4 mb-md-0">
                    {x.description}
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">${x.price ? x.price.toLocaleString() : x.price} </h4>
                    <span className="text-danger"><s>${(x.price * 1.1).toFixed(2)}</s></span>
                  </div>
                  <h6 className="text-success">Created : {x.createdAt?.substr(0, 10)}</h6>
                  <div className="d-flex flex-column mt-4">
                    <Link to={`/edit-product/${x._id}`}>
                    <button className="btn btn-primary btn-sm w-100" type="button">Edit</button>
                    </Link>
                    <button onClick={() => deleteHandler(x._id)}  className="btn btn-danger btn-sm mt-2" type="button">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       })}
      
        
      </div>
    </section>

  </>
}