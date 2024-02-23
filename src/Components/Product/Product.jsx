import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Product=()=>{
    const[name,setName] = useState("");
    const[price,setPrice] = useState("");
    const[category,setCategory] = useState("");
    const[company,setCompany] = useState("");
    const[error ,setError] = useState(false);
    const navigate = useNavigate();

    const addPrdouct =async()=>{
        
       if(!name && !price && !category && !company){
        setError(true);
        return false;
       }
        try{
            let result = await fetch('http://localhost:5000/add',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body:JSON.stringify({name,price,category,company})
            });
            result = await result.json();
            console.log(result);
            navigate("/");
            

        }catch(error){
            console.log("error");
        }
    }

    return (
        <main>
            <div className='title'>
            <h2>OUR DEVICES</h2>
            <div className='underline'></div>
            </div>
            <div className='input_type'>
                { error && !name &&<span> Name is not valid</span> }
                <input value={name} onChange={(e)=>setName(e.target.value)}  type='name' placeholder='Product name'/>
                { error && !price &&<span> Enter your price</span> }
                <input value={price} onChange={(e)=>setPrice(e.target.value)}  type='price' placeholder='$ Price of product'/>
                { error && !category &&<span> Enter your category of device</span> }
                <input value={category} onChange={(e)=>setCategory(e.target.value)}  type='category' placeholder='Category '/>
                { error && !company &&<span> Please Enter your company name</span> }
                <input value={company} onChange={(e)=>setCompany(e.target.value)}  type='company' placeholder='Company of device'/>
                <button className='btn' onClick={()=>addPrdouct()} >Add Product </button>

            </div>

        </main>
    )
}
export default Product;