import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import MainNavbar from "../Navbar/MainNavbar"
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

export default function CreateAsConsultant() {
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

    Axios.post(
      `${process.env.REACT_APP_SERVER_API}/consultant/createConsultant`,
      {
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
      }
    )
      .then((res) => {
        toast.success("Consultant Created",{
          onclose:()=>{
            navigate('/')
          }
        })
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
  };
  return (
    <>
    
      <ToastContainer/>
      <MainNavbar/>
      <Container>
        <h1 className="display-4 text-center" style={{color:"#fff", backgroundColor:"#172554 ",textAlign:"center",border:"3px solid #172554", borderRadius:"4px", marginTop:"15px"}}>Create Consultant</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name </Form.Label>
            <Form.Control
              type="text"
              placeholder="Consultant Name"
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
    </>
  );
}


