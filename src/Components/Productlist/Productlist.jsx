import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './productlist.css'
export const Productlist = () => {
    const[productItem,setProductItem]  = useState([]);
    useEffect(()=>{
        getproduct();

    },[]);

    const getproduct = async()=>{
        let result = await fetch('http://localhost:5000/productslist',{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setProductItem(result);
    }
   
    
    const deletebtn=async(id)=>{
        let result = await fetch(`http://localhost:5000/product/${id}`,{
            method:"DELETE",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if(result){
            getproduct();
        }

    }
    const searchandle=async(event)=>{
        let key = event.target.value;
        let result = await fetch(`http://localhost:5000/search/${key}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        if(result){
            setProductItem(result);
        }

    }
  return (
    <main >
        <section className='main'>
        <div className='title'>
            <h2>Product List</h2>
            <div className='underline'></div>
        </div>
        <div className='search'>
            <input type='search' placeholder='Search-----' onChange={searchandle}/>
        </div>
       
        <div className='container'>
       
       
            <ul className='product_list'>
                <li className='items'>S.No.</li>
                <li className='items' >Name</li>
                <li className='items'>Price</li>
                <li className='items'>cateogory</li>
                <li className='items'>company</li>
                <li className='items'>Delete</li>
                <li className='items'>Update</li>
            </ul>
            {
                productItem.map((item,index)=>
                    <ul className='product_list' key={item._id}>
                        <li className='items'>{index+1}</li>
                        <li className='items'>{item.name}</li>
                        <li className='items'>${item.price}</li>
                        <li className='items'>{item.category}</li>
                        <li className='items'>{item.company}</li>
                        <li><button onClick={()=>deletebtn(item._id)}  className='btn'>Delete</button></li>
                        <li><Link to={"/update/"+item._id}><button className='btn'>Update</button></Link></li>
                    </ul>
                )
            }
        </div>

        </section>
    </main>
  )
}

