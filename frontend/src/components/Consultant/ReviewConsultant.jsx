import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Con from "react-bootstrap/Container";
import MainNavbar from "../Navbar/MainNavbar";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useParams} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import SuccessPopUp from "../SuccessPopUp/PopUp.jsx";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function ReviewConsultant() {
  // Form data State
  const consultantId = useParams();
  const [consultantName, setConsultantName] = useState();
  const [userName, setUserName] = useState();
  const [review, setReview] = useState();
  const [points, setPoints] = useState();
  const [value, setValue] = React.useState(2);


  useEffect(()=>{
    Axios.get(`${process.env.REACT_APP_SERVER_API}/consultant/getConsultantByID/${consultantId.id}`,{
      headers:{
        'access-token':localStorage.getItem("Token")
      }
    })
    .then((res) => {
     console.log(res.data);
     setConsultantName(res.data.title)

    })
    .catch((err) => console.log(err));
  })

  const reviewFormSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_API}/reviewConsultant/createReview`, {
      consultantName,
      userName,
      review,
      points,
      value
    })
      .then((res) => {
        toast.success("Thank You", {
          onClose: () => {
            alert("Review Donee Kudos to You")
          },
        });
      })
      .catch((err) => console.log(`Error is going on please check it ${err}`));

      Axios.put(`${process.env.REACT_APP_SERVER_API}/consultant/updateConsultant/${consultantId.id}`,{
        ratings:value
      },{
        headers:{
          'access-token':localStorage.getItem("Token")
        }
      })
  };

  return (
    <>
      <MainNavbar />
      <ToastContainer />
      <Con>
        <h1
          className="display-4 text-center"
          style={{
            color: "#fff",
            backgroundColor: "#172554 ",
            fontSize: "40px",
            textAlign: "center",
            border: "3px solid #172554",
            borderRadius: "18px",
            marginTop: "15px",
            marginBottom: "30px",
          }}
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
              placeholder="Consultant Name"
              value={consultantName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Name :</Form.Label>
            <Form.Control
              required
              name="userName"
              type="text"
              placeholder="Your Name"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Your Review Here:</Form.Label>
            <Form.Control
              required
              name="review"
              type="text"
              placeholder="Must be characters around 10 words atleast"
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
          </Form.Group>
          <Typography component="legend">Ratings</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Points:</Form.Label>
            <Form.Control
              required
              name="points"
              type="number"
              placeholder="Enter Your Points 1 - 10"
              onChange={(e) => {
                setPoints(e.target.value);
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
