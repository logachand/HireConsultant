import React, { useState } from "react";

import "./style.css";
import { Link, NavLink } from "react-router-dom";

export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getToken = window.localStorage.getItem("Token")
  console.log(getToken);
  const googleToken = window.localStorage.getItem("GoogleLogin",true)
  console.log(googleToken);

  const logout = () =>{
    window.localStorage.removeItem("Token")
    window.localStorage.removeItem("GoogleLogin")
  }
  return (
    <nav>
      <Link to="/" className="title">
        Hire Consultant
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/" style={{textDecorationLine:"none"}} >Home</NavLink>
        </li>
        <li>
          {!getToken && !googleToken ? 
          <NavLink to="/joinAs" style={{textDecorationLine:"none"}}>Join As Consultant</NavLink>:
          <NavLink to="/createAsConsutlant" style={{textDecorationLine:"none"}}>Join As Consultant</NavLink>}
        </li>
        <li>
          <NavLink to="/adminPanel" style={{textDecorationLine:"none"}}>adminPanel</NavLink>
        </li>
        <li>
          { !getToken && !googleToken ?  
          <NavLink to="/login" style={{textDecorationLine:"none"}} >Login</NavLink> : 
          <NavLink to="/login"  style={{textDecorationLine:"none"}} onClick={()=> logout()}>Logout</NavLink>}
        </li>
      </ul>
    </nav>
  );
};


export default MainNavbar

