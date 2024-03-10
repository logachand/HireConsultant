import React, { useState } from "react";
import "./style.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import MainNavbar from "../Navbar/MainNavbar";

export default function Signin() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInfoVisible, setPasswordInfoVisible] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/register`, {
      firstName,
      lastName,
      email,
      password,
    })
      .then((res) => {
        console.log(res.data);
        toast.success(`User is Registered Successfully`, {
          onClose: () => {
            navigate("/login");
          },
        });
      })
      .catch((err) => console.log(err));
  };

  function passwordInfo() {
    return "Password must be 8 characters";
  }

  return (
    <>
      <MainNavbar />
      <ToastContainer />
      <div className="check">
        <div className="login-box">
          <div className="login-header">
            <header>Sign Up</header>
          </div>
          <form onSubmit={submitHandler}>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder=" First Name"
                autoComplete="off"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                placeholder=" Last Name"
                autoComplete="off"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {passwordInfoVisible && (
              
                <p style={{fontSize:"10px", marginLeft:"30px"}}>{passwordInfo()}</p>
              
            )}
            <div className="input-box">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordInfoVisible(true)}
                onBlur={() => setPasswordInfoVisible(false)}
              />
            </div>

            <div className="input-submit">
              <button className="submit-btn" id="submit"></button>
              <label htmlFor="submit">Sign Up</label>
            </div>
          </form>
          <div className="sign-up-link">
            <p>
              Already Have Account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
