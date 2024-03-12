import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Con from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import MainNavbar from "../Navbar/MainNavbar";

function HireForm() {

  const navigate = useNavigate()
  const consultantId = useParams();
  console.log(consultantId); 
  var consultantDetails = {};
  const [consultantName, setConsultantName] = useState();
  const [consultantEmail, setConsultantEmail] = useState();
  const [consultantPhone, setConsultantPhone] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [age, setAge] = useState();
  const [hear, setHear] = useState();
  const [consultationDate , setConsultantionDate] = useState();


  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_SERVER_API}/consultant/getConsultantByID/${consultantId.id}`,{
      headers:{
        'access-token':localStorage.getItem("Token")
      }
    })
    .then((res) => {
      setConsultantName(res.data.title);  
      setConsultantEmail(res.data.consultantEmail);
      setConsultantPhone(res.data.consultantPhone);
      console.log(res.data.title+ "  "+ consultantName);
    })
    .catch((err) => console.log(err));

  })

  const hireFormSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_API}/hiredConsultant/createHiredConsultant`, {
      userName,
      userEmail,
      userPhone,
      age,
      hear,
      consultantDetails:{
        consultantName,
        consultantEmail,
        consultantPhone
      },
      consultationDate
    })
      .then((res) => {
        alert(`Consultant Hired Successfully - ${consultantName} `)
        toast.message(`${consultantName} Hired Successfully`);
        navigate('/reviewConsutant')
      })
      .catch((err) => console.log(`Error is going on Please Check : ${err}`));
  };

  return (
    <>
      <MainNavbar/>
      <ToastContainer />
      <Con>
      <h1 className="display-4 text-center" style={{color:"#fff", backgroundColor:"#172554 ",textAlign:"center",border:"3px solid #172554", borderRadius:"4px", marginTop:"15px"}}>Hire Consultant Form</h1>
        <Form onSubmit={hireFormSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Name :</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Email :</Form.Label>
            <Form.Control
              name="userEmail"
              type="text"
              placeholder="Enter email"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Number:</Form.Label>
            <Form.Control
              name="number"
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setUserPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Your Age:</Form.Label>
            <Form.Control
              name="age"
              type="Number"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>How Did You Hear About Us? </Form.Label>
            <Form.Control
              name="intrested"
              type="text"
              placeholder="e.g., Referral, LinkedIn, FaceBook"
              onChange={(e) => setHear(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Date For Consultation And discussion </Form.Label>
            <Form.Control
              type="date"
              onChange={(e) => setConsultantionDate(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: "green", marginTop: "7px" }}
          >
            Hire Please
          </Button>
        </Form>
      </Con>
    </>
  );
}

export default HireForm;


