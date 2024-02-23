import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateComponents=()=>{
    const Auth = localStorage.getItem('users');
    return  Auth ? <Outlet/>: <Navigate to="/signup"/>
}
export default PrivateComponents;