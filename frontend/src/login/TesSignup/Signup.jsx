import React, { useState } from "react";
import Axios from "axios";
import styles from "./styles.module.css";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
        toast.success(`User is Registered Successfully`,{
          onClose: ()=> {
            navigate("/login");
          }
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
	<ToastContainer/>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1 style={{ fontSize: "23px" }}>Already Have Account ?</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Login Here
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container} onSubmit={submitHandler}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                required
                className={styles.input}
              />
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
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
