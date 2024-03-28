import React, { useState } from "react";

import "./style.css";
import { Link, NavLink } from "react-router-dom";

export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminForm, setShowAdminForm] = useState(false);
  const getToken = window.localStorage.getItem("Token");
  const googleToken = window.localStorage.getItem("GoogleLogin");

  const logout = () => {
    window.localStorage.removeItem("Token");
    window.localStorage.removeItem("GoogleLogin");
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    // Check if admin password is correct (you can replace this with your own logic)
    const correctPassword = "admin123"; // Change this to your actual admin password
    if (adminPassword === correctPassword) {
      // Navigate to admin panel if password is correct
      window.location.href = "/mainAdmin"; // You can use React Router navigation here if needed
    } else {
      alert("Incorrect admin password");
    }
  };

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
            <span className="admin-form-close" onClick={() => setShowAdminForm(false)}>
              &times;
            </span>
            <h2 className="admin-form-title">Admin Access</h2>
            <form onSubmit={handleAdminSubmit}>
              <input
                className="admin-form-input"
                type="password"
                placeholder="Enter admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <button className="admin-form-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};


export default MainNavbar

