import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    const navigate = useNavigate();
    const Auth = localStorage.getItem("users");
    const logout =()=>{
        localStorage.clear();
        navigate('/signup');
    }
    return(
        <main className='container'>
      
        {
            
            Auth ? <ul className='nav-ul'>
            <li>  <img  style={{borderRadius:"50%",height:"3rem"}} className='logo' src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1708236000&semt=sph' alt='logo'/></li>
            <li className='items'><Link to='/'>Products</Link></li>
            <li className='items'><Link to='/add'>Add</Link></li>
            {/* <li className='items'><Link to='/update/:id'>Update</Link></li> */}
            <li className='items'><Link to='/login' onClick={logout}>Logout ({JSON.parse(Auth).name})</Link></li>
            </ul>
            :<ul className='nav-ul'>
            <li>  <img className='logo' style={{borderRadius:"50%",height:"3rem"}} src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1708236000&semt=sph' alt='logo'/></li>
                <li className='items'><Link to='/signup'>Signup</Link></li>
                <li className='items'><Link to='/login'>Login</Link></li>
            </ul>

        }
            {/* <li className='items'><Link to='/'>Products</Link></li>
            <li className='items'><Link to='/add'>Add</Link></li>
            <li className='items'><Link to='/update'>Update</Link></li>
            <li className='items'><Link to='/login'>Login</Link></li>
            <li className='items'>{Auth ? <Link onClick={logout} to='/Logout'>Logout</Link> :<Link to='/signup'>Signup</Link>}</li> */}
       

        </main>
    )
}
export default Navbar;