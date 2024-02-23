import React, { useState , } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();

  const loginbtn=async()=>{
    let result = await fetch('https://eshop-mern-backend.onrender.com/login',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({email,password})
    });
    result = await result.json();
    if(result.auth){
      localStorage.setItem("users",JSON.stringify(result.user));
      localStorage.setItem("token",JSON.stringify(result.auth));
      navigate("/");
    }else{
      console.log("No user found");
    }
  }
  return(
    <section className='container'>
    <h2> Login Here</h2>
    <div className='underline'></div>
    <div className='input_type'>
    <input type='email' value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type='password' value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} />
    <button className='btn' onClick={loginbtn}>Login Here</button>
    </div>


    </section>
)
}
