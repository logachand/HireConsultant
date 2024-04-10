import React, { useState } from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";
import { toast,ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom";



export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [showAdminForm, setShowAdminForm] = useState(false);
  const getToken = window.localStorage.getItem("Token");
  const googleToken = window.localStorage.getItem("GoogleLogin");

  const logout = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("GoogleLogin");
  };


  const navigate = useNavigate();
  
  const handleAdminSubmit = (e) => {
    e.preventDefault();
   
    Axios.post(`${process.env.REACT_APP_SERVER_API}/admin/adminLogin`,{
      adminName,adminPassword
    })
    .then((admin) => {
      console.log(admin.data);
      if(admin.data.adminCredentails.adminPassword === adminPassword) {
        window.localStorage.setItem("adminToken", admin.data.adminToken);
        navigate(`/mainAdmin`)
      }else {
          toast.error("Invalid admin password")
      }
      
    })
    .catch((err)=>{
      console.log(err);
    })

  };

  return (
    <>
    <ToastContainer/>
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
          <NavLink to="/" style={{ textDecorationLine: "none" }}>
            Home
          </NavLink>
        </li>
        <li>
          {!getToken && !googleToken ? (
            <NavLink to="/joinAs" style={{ textDecorationLine: "none" }}>
              Join As Consultant
            </NavLink>
          ) : (
            <NavLink
              to="/createAsConsutlant"
              style={{ textDecorationLine: "none" }}
            >
              Join As Consultant
            </NavLink>
          )}
        </li>
        <li>
          {/* Clicking the adminPanel link will toggle the admin form */}
          <NavLink
            to="#"
            style={{ textDecorationLine: "none" }}
            onClick={() => setShowAdminForm(true)}
          >
            adminPanel
          </NavLink>
        </li>
        <li>
          {!getToken && !googleToken ? (
            <NavLink to="/login" style={{ textDecorationLine: "none" }}>
              Login
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              style={{ textDecorationLine: "none" }}
              onClick={() => logout()}
            >
              Logout
            </NavLink>
          )}
        </li>
      </ul>
      {/* Admin Access Form Popup */}
      {showAdminForm && (
        <div className="admin-form-popup">
          <div className="admin-form-container">
            <span
              className="admin-form-close"
              onClick={() => setShowAdminForm(false)}
            >
              &times;
            </span>
            <h2 className="admin-form-title">Admin Access</h2>
            <form onSubmit={handleAdminSubmit}>
              <input
                className="admin-form-input"
                type="text"
                placeholder="Enter admin Name"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
              />

              <input
                className="admin-form-input"
                type="password"
                placeholder="Enter admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />

              <button className="admin-form-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default MainNavbar;
