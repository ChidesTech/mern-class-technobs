import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import http from "../http";


export default function RegisterPage(){
  const [email, setEmail] = useState("");
  const [username , setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function submitHandler(e){
     e.preventDefault();

     if(!email || !username || !password || !confirmPassword){
      setError("Please Fill All Fields!");
      return;
     }

     if(password.length < 4){
      setError("Password must be at least 4 characters");
      return;
     }
    
    if(confirmPassword !== password){
    setError("Passwords do not match");
    return;
    }

    //Send a http post request to the backend api to register a new user
    const {data} = await http.post("/users/register", {email, username, password});
    if(data.error){
      setError(data.error);
    }
    if(data.success){
      Swal.fire("Done", data.success, "success");
      navigate("/login");
    }

     

  }


    return <>
    <div className="login row">
        <img style={{height : "28rem"}} className="col-lg-5 col-sm-12" src="https://media.istockphoto.com/id/1305268276/vector/registration-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=nfvUbHjcNDVIPdWkaxGx0z0WZaAEuBK9SyG-aIqg2-0=" alt="" />
      <form onSubmit={submitHandler} action="" className="form col-lg-7 col-sm-12">
        <h2 className="mb-3">Register</h2>
     {error &&  <div className="alert alert-danger p-2 my-2">{error}</div>}
        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control mb-3" placeholder="Email Address" />
        <input onChange={e => setUsername(e.target.value)} type="text" className="form-control mb-3" placeholder="Username" />
        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control mb-3" placeholder="Password"/>
        <input onChange={e => setConfirmPassword(e.target.value)} type="password" className="form-control mb-3" placeholder="Confirm Password"/>
       <input type="checkbox" name="" id="" /> Agree to our privacy policy.
        <button className="btn btn-primary form-control mb-3 mt-2">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
    </>
}