import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
//import Header from './Header'
import axios from 'axios';
function Login () {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const navigate = useNavigate();

  const handleLogin=async()=>{
    //event.preventDefault();
   const apiKey = process.env.REACT_APP_USERNAME;
     const url = process.env.REACT_APP_PASSWORD;
    console.log("Email:", email);
    console.log("Password:", password);
try{
  const response=await axios.post(url,{
    userId:email,
    password:password,
    apiKey:apiKey,

  });

 
  if (response.data.success){
    localStorage.setItem('user-info',JSON.stringify(response.data.user));
    navigate("/add");
  }else{
    alert("Login failed. Please check your credentials.");
  }
}catch (error){
  console.error("There was an error logging in!",error);
}

  };

       return (
        <div>    
        <h1>Login Page</h1>
        <div className="col-sm-6 offset-sm-3">
        <form onSubmit={handleLogin}>
          <label> UserId:</label>
        <input type="text"placeholder="enter email id..." 
        onChange={(e)=>setEmail(e.target.value)}
        className="form-control"/>
        <br/>
        <label> Password:</label>
        <input type="password"  placeholder="enter password..."
         onChange={(e)=>setPassword(e.target.value)}
        className="form-control"/>
        <br/>
        <button type="submit" className="login-btn">Login</button>
      </form>
      </div> 
      </div>
    );
  }

  export default Login;