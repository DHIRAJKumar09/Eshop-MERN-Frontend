import React, { useEffect, useState } from 'react';
import './signup.css'
import { useNavigate } from 'react-router-dom';
import { useActionData } from 'react-router-dom';
const Signup=()=>{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const Auth = localStorage.getItem('users');
        if(Auth){
            navigate('/');
        }
        else{
            console.log('no users found');
        }
    })
    const handlebtn = async () => {
        console.log(name, email, password); // Assuming name, email, and password are defined somewhere
    
        try {
            let result = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
    
            result = await result.json();
            console.log(result);
            localStorage.setItem('users',JSON.stringify(result.result));
            localStorage.setItem('token',JSON.stringify(result.auth));
            navigate("/");
        } catch (error) {
            console.error('Error occurred:', error);
        }
    }

    
    
    return(
        <section className='container'>
        <h2> Register Here</h2>
        <div className='underline'></div>
        <div className='input_type'>
        <input type='text' value={name} placeholder='Enter Your NAME'  onChange={(e)=>setName(e.target.value)}/>
        <input type='email' value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} />
        <button className='btn' onClick={()=>handlebtn()}>Register Here</button>
        </div>


        </section>
    )
}
export default Signup;