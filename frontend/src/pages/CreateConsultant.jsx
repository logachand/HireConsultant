import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Navigation from "../Navigation";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateConsultant() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    Axios.post(`${process.env.REACT_APP_SERVER_API}/consultant/createConsultant`, {
      title: title,
      des: des,
      img: img,
    })

      .then((res) => {
        console.log("title of the Consulant" + res.data.title);
        alert("Consultant is Created");
      })
      .catch((err) =>
        console.log(`Error is Going on Please check it : ${err}`)
      );
    setTitle("");
    setDes("");
    setImg("");
    navigate("/");
  };

  return (
    <div>
      <Navigation />
      <Container>
        <h1 className="display-4 text-center">Create Consultant</h1>
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Specialist</Form.Label>
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
