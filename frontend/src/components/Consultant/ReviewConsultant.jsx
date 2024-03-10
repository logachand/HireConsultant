import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Con from "react-bootstrap/Container";
import TopNavbar from "../../TestComp/TopNavbar"
import MainNavbar from "../Navbar/MainNavbar";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessPopUp from "../SuccessPopUp/PopUp.jsx";



export default function ReviewConsultant() {
  

  // Form data State
  const [consultantName, setConsultantName] = useState();
  const [userName, setUserName] = useState();
  const [review, setReview] = useState();
  const [ratings, setRatings] = useState();

  const reviewFormSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/reviewConsultant/createReview", {
      consultantName,
      userName,
      review,
      ratings,
    })
      .then((res) => {
        console.log(res.data.review);
        toast.success("Thank You", {
          onClose: () => {},
        });
      })
      .catch((err) => console.log(`Error is going on please check it ${err}`));
  };

  return (
    <>
      <TopNavbar/>
      <MainNavbar/>
      <ToastContainer />
      <Con>
        <h1
          className="display-4 text-center"
          style={{ color: "green", padding: "20px" }}
        >
          REVIEW THE BEST CONSULTANT
        </h1>
        <Form onSubmit={reviewFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Consultant Name : </Form.Label>
            <Form.Control
              required
              name="consultantName"
              type="text"
              placeholder="Enter Consultant Name"
              onChange={(e) => setConsultantName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Name :</Form.Label>
            <Form.Control
              required
              name="userName"
              type="text"
              placeholder="Enter your Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Your Review Here:</Form.Label>
            <Form.Control
              required
              name="review"
              type="text"
              placeholder="Enter Your Review"
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Ratings:</Form.Label>
            <Form.Control
              required
              name="ratings"
              type="number"
              placeholder="Enter Your Ratings 1 - 10"
              onChange={(e) => {
                setRatings(e.target.value);
              }}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: "blue", marginTop: "7px" }}
  
          >
            Review Please
          </Button>

        </Form>

        {/* <SuccessPopUp/> */}
      
      </Con>
    </>
  );
}
