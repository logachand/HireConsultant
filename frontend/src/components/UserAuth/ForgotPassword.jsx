import React, { useState } from "react";
import  Axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainNavbar from "../Navbar/MainNavbar"
import "./style.css"


function ForgotPassword() {
  
  const [email,setEmail] = useState()
  const navigate = useNavigate()
  const forgotHandler = (e) =>{
    e.preventDefault()
    Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/forgotPassword`,{email})
    .then(res=> {
      if(res.data.message === "success"){
        console.log("Mail Sent" +  res.data.message);
        toast.success("Reset Link sent to your MailID",{
          onclose:() => {
            navigate('/login')
          }
        }) 
      }
    })
    .catch(err => console.log(`${err}`))
  }
  return (
    <div>
      <MainNavbar/>
        <ToastContainer/>
        <div className="check">
        <div className="login-box">
          <div className="login-header">
            <header>Forgot Password</header>
          </div>
       <form  onSubmit={forgotHandler}>
          <div className="input-box">
            <input
              type="text"
              className="input-field"
              placeholder="Email"
              autocomplete="off"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-submit">
            <button className="submit-btn" id="submit"></button>
            <label for="submit">Sent</label>
          </div>
          </form>
      </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
