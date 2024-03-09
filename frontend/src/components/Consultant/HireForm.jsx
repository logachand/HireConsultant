import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Con from "react-bootstrap/Container";
import Navbar from "../../TestComp/Navbar"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import TestNav from "../../TestNav/TestNav"

function HireForm() {

  const navigate = useNavigate()
  const [consultantName, setConsultantName] = useState();
  const [userName, setUserName] = useState();
  const [age, setAge] = useState();
  const [interest, setInterest] = useState();

  // const hireMe = (id) =>{
  //   getId(id);
  // }

  const hireFormSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/hiredConsultant/createHiredConsultant", {
      consultantName,
      userName,
      age,
      interest,
    })
      .then((res) => {
        console.log(res.data);
        // alert(`The Consultant Name : ${res.data.consultantName} is Hired`)
        alert(`The Consultant Name : ${res.data.consultantName} is Hired`);
        toast.success(`${res.data.consultantName} is Hired Successfully`,{
          onClose:() =>{
            navigate('/hireForm')
          }
        });
      })
      .catch((err) => console.log(`Error is going on Please Check : ${err}`));
  };

  return (
    <>
      <TestNav/>
      <ToastContainer />
      <Con>
      <h1 className="display-4 text-center" style={{color:"#fff", backgroundColor:"#172554 ",textAlign:"center",border:"3px solid #172554", borderRadius:"4px", marginTop:"15px"}}>Hire Consultant Form</h1>
        <Form onSubmit={hireFormSubmit}>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Consultant Name : </Form.Label> */}
            {/* <Form.Control
              name="consultantName"
              type="text"
              placeholder="Enter Consultant Name"
              onChange={(e) => setConsultantName(e.target.value)}
            /> */}
          {/* </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Name :</Form.Label>
            <Form.Control
              name="userName"
              type="text"
              placeholder="Enter email"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Your Age:</Form.Label>
            <Form.Control
              name="age"
              type="text"
              placeholder="Enter Your Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Your Area of Interest:</Form.Label>
            <Form.Control
              name="intrested"
              type="text"
              placeholder="Enter Your Intrested"
              onChange={(e) => setInterest(e.target.value)}
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


