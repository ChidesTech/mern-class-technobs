import { useState } from "react"
import { Link } from "react-router-dom"
import http from "../http";


export default function LoginPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   async function submitHandler(e){
     e.preventDefault();
     const {data} = await http.post("/users/login", {email, password});

   }

    return <>
    <div className="login row">
        <img style={{height : "28rem"}} className="col-lg-5 col-sm-12" src="https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0=" alt="" />
      <form onSubmit={submitHandler}  action="" className="form col-lg-7 col-sm-12">
        <h2 className="mb-3">Login</h2>
        <input onChange={e => setEmail(e.target.value)} type="text" className="form-control mb-3" placeholder="Email Address" />
        <input onChange={e => setPassword(e.target.value)} type="text" className="form-control mb-3" placeholder="Password"/>
        <button type="submit" className="btn btn-primary form-control mb-3">Login</button>
       <p>Don't have an account?  <Link to="/register">Register</Link> </p>

      </form>
    </div>
    </>
}