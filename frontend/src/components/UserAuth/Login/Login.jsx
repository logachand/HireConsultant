import React, { useState } from "react";
import styles from "./styles.module.css";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    
    Axios.post(`${process.env.REACT_APP_SERVER_API}/userCredentials/login`, {
      email,
      password,
    })
      .then((res) => {
        console.log(res);
        if (res.data.message === "success") {
          window.localStorage.setItem("Token" , res.data.loginToken)
          toast.success("Login Successfully", {
            onClose: () => {
              navigate("/");
            },
          });
        } else if (
          res.data === "Invalid"
        ) {
          console.log(res.data);
          toast.error("Invalid Credentials");
        }
      })
      .catch((err) => console.log(`${err}`));
  };      
  return (
    <>
      <ToastContainer />
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container} onSubmit={loginHandler}>
              <h1>Login to Your Account</h1>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
              />
              {/* {error && <div className={styles.error_msg}>{error}</div>} */}
              <button type="submit" className={styles.green_btn}>
                Login
              </button>
              <Link to="/forgotPassword">Forgot Password<a href=""></a></Link>
            </form>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
                window.localStorage.setItem("GoogleLogin",true)
                toast.success("Google Login",{
                  onClose:()=>{
                    navigate('/')
                  }
                })
                
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to="/signup">
              <button type="button" className={styles.white_btn}>
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
