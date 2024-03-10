import React, { useState } from "react";
import  Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  
import MainNavbar from "../Navbar/MainNavbar"
import "./style.css"
function ResetPassword() {
  
  const [newPassword,setNewPassword] = useState()
  const [confirmPassword,setConfirmPassword] = useState()
  const navigate = useNavigate()
  const {id,token} = useParams()

  // const axe = Axios()
  const forgotHandler = (e) =>{
    e.preventDefault()
    Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/resetPassword/${id}/${token}`,{newPassword, confirmPassword })
    .then(res=>{console.log(res)
      if(res.data === 'success'){
        toast.success("Password Reset Successfully",{
          onClose:() =>{
            navigate('/login')
          }
        }) 
      } else if( res.data === "Invalid"){
          toast.error("Password Not Match")
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
            
            <header>Reset Password</header>
          </div>
      <form  onSubmit={forgotHandler}>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="New Password"
              autocomplete="off"
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              autocomplete="off"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input-submit">
            <button className="submit-btn" id="submit"></button>
            <label for="submit">Reset</label>
          </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default ResetPassword;
