import React from "react";
import videoBg from "../../assets/videoBg.mp4";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";



function Main() {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <h1>WELCOME </h1>
        <p>To my site.</p>
        <Form.Text className="form_text">Please Login Here!!</Form.Text>
        <Link to="/login"  className="login" variant="danger" type="button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Main;
