import React, { useState } from "react";

import "./style.css";
import { Link, NavLink } from "react-router-dom";

export const TestNav = () => {
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Consultant</NavLink>
        </li>
        <li>
          <NavLink to="/adminPanel">Pages</NavLink>
        </li>
        <li>
          { !getToken && !googleToken ?  
          <NavLink to="/login">Login</NavLink> : 
          <NavLink to="/login" onClick={()=> logout()}>Logout</NavLink>}
        </li>
      </ul>
    </nav>
  );
};


export default TestNav

