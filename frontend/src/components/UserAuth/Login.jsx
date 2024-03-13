import React, { useState }  from "react";
import "./style.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import MainNavbar from "../Navbar/MainNavbar"
import { Button } from "@mui/material";


export default function Log() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  var clientId
  console.log("HEllo");
  const loginHandler = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/login`, {
      email,
      password,
    })
      .then((res) => {
        console.log(email + "   " + password);
        console.log(res);
        if (res.data.message === "success") {
          window.localStorage.setItem("Token", res.data.loginToken);
          toast.success("Login Successfully", {
            onClose: () => {
              navigate("/");
            },
          });
        } else if (res.data === "Invalid") {
          console.log(res.data);
          toast.error("Invalid Credentials");
        }
      })
      .catch((err) => console.log(`${err}`));


      
  };
  // Google Login
  function GFun(){
    console.log("Working");
    console.log("client ID  Before Axios : " + clientId);

  }
  Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/googleLogin`,{
    clientId
  })
  .then((res)=>{
    console.log(res.data.googleToken);
  })
  .catch((err)=>{
    console.log(`Error is Going on Please check it ${err}`);
  })
  return (
    <>
    <MainNavbar/>
    <ToastContainer />
      <div className="check">
        <div className="login-box">
          <div className="login-header">
            
            <header>Login</header>
          </div>
      <form  onSubmit={loginHandler}>
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
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              autocomplete="off"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot">
            <section>
              <input type="checkbox" id="check" />
              <label for="check">Remember me</label>
            </section>
            <section>
            <Link to="/forgotPassword"><a href="#">Forgot password</a></Link>
            </section>
          </div>
          <div className="input-submit">
            <button className="submit-btn" id="submit"></button>
            <label for="submit">Sign In</label>
          </div>
          </form>
          <div className="sign-up-link">
            <p>
              Don't have account? <Link to ="/signup">Sign Up</Link>
            </p>
            <Button onClick={()=>GFun()}>Check
            <GoogleLogin   
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                console.log("Google Client ID" + credentialResponse.clientId);
                clientId = credentialResponse.clientId
                console.log("Google client ID checking ::  " + clientId);
                window.localStorage.setItem("GoogleLogin", true);
                toast.success("Google Login", {
                  onClose: () => {
                    navigate("/");
                  },
                });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />

            </Button>
            <div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


