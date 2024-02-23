import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Updatecomponent = () => {
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[category,setCategory] = useState("");
    const[company,setCompany] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        console.warn(params);
        getProductDetails();
    },[]);

    const getProductDetails=async()=>{
        console.warn(name,price,category,company);
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"GET",
            headers:{
              authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        })
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
      
    }
    const updateProductDetails=async()=>{
      let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json',
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        body:JSON.stringify({name,price,category,company})
      });
      result =await result.json();
      console.warn(result);
      navigate("/");
    }

  return (
    <main className='main'>
   
        <div className='title'>
            <h2>Update Product</h2>
            <div className='underline'></div>
        </div>
        <div className='container'>
        <div className='input_type'>

                <input value={name} onChange={(e)=>setName(e.target.value)}  type='name' placeholder='Product name'/>
                <input value={price} onChange={(e)=>setPrice(e.target.value)}  type='price' placeholder='$ Price of product'/>
                <input value={category} onChange={(e)=>setCategory(e.target.value)}  type='category' placeholder='Category '/>
                <input value={company} onChange={(e)=>setCompany(e.target.value)}  type='company' placeholder='Company of device'/>
                <button className='btn' onClick={()=>updateProductDetails()} >Add Product </button>

            </div>
        </div>
    </main>
  )
}
