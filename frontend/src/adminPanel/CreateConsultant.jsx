import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navigation from "./Navigation";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateConsultant() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [consultantEmail, setConsultantEmail] = useState("");
  const [consultantPhone , setConsultantPhone] = useState("");
  const [consultantPostion, setConsultantPostion]  = useState("");
  const [consultantLinkedIn, setConsultantLinkedIn] =  useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    Axios.post(`${process.env.REACT_APP_SERVER_API}/consultant/createConsultant`, {
      title: title,
      consultantEmail:consultantEmail,
      consultantPhone:consultantPhone,
      consultantLinkedIn:consultantLinkedIn,
      consultantPostion:consultantPostion,
      des: des,
      img: img,
    },{
      headers:{
        'access-token':localStorage.getItem("Token")
      }
    })

      .then((res) => {
        console.log("title of the Consulant" + res.data.title);
        alert("Consultant is Created");
      })
      .catch((err) =>
        console.log(`Error is Going on Please check it : ${err}`)
      );
    setTitle("");
    setConsultantEmail("");
    setConsultantPhone("")
    setConsultantLinkedIn("");
    setConsultantPostion("");
    setDes("");
    setImg("");
    navigate("/");
  };

  return (
    <div>
      <Navigation />
      <Container>
      <h1 className="display-4 text-center" style={{color:"#fff", backgroundColor:"#268cd9",textAlign:"center",border:"3px solid #268cd9", borderRadius:"4px", marginTop:"15px"}}>Create Consultant</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Consultant Name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Email </Form.Label>
            <Form.Control
              type="text"
              placeholder="Consultant Email"
              onChange={(e) => setConsultantEmail(e.target.value)}
              value={consultantEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter your Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Consultant Phone Number"
              onChange={(e) => setConsultantPhone(e.target.value)}
              value={consultantPhone}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Profession</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Profession"
              onChange={(e) => setConsultantPostion(e.target.value)}
              value={consultantPostion}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your LinkedIn Id (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter LinkedIn ID"
              onChange={(e) => setConsultantLinkedIn(e.target.value)}
              value={consultantLinkedIn}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Describe about You Specialist : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Specialist"
              onChange={(e) => setDes(e.target.value)}
              value={des}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Image Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Specialist"
              onChange={(e) => setImg(e.target.value)}
              value={img}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default CreateConsultant;
