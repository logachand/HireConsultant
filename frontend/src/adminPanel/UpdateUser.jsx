import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Axios from "axios";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateUser({ id }) {

  const navigate = useNavigate();
  const [values,setValues] = useState({
    title:'',
    des:'',
    img:'',
  })
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SERVER_API}/consultant/getConsultantByID/${id}`,{
      headers:{
        'access-token':localStorage.getItem("Token")
      }
    }).
    then(res => {
      setValues({...values,title:res.data.title,des:res.data.des,img:res.data.img})
    })
    .catch(err =>console.log(err))

  }, []);


  const updateHandler = (id) => {
    Axios.put(`http://localhost:4000/consultant/updateConsultant/${id}`, 
    values,{
      headers:{
        'access-token':localStorage.getItem("Token")
      }
    }
    )
      .then((res) => {
        
        setValues({...values,title:res.data.title,des:res.data.des,img:res.data.img})
        // alert("Consultant is Updated")
        toast.success("Consultant is Updated",{
          onClose:()=>{
            navigate("/");
          }
        })
      })
      .catch((err) => console.log(`Error :${err}`));
    
  };

  return (
    <div>
      <Navigation />
      <ToastContainer/>
      <Container>
        <h1 className="display-4 text-center">Update Consultant</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            updateHandler(id);
          }}
        >
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Consultant Name"
              value={values.title}
              onChange={(e) => setValues({...values,title:e.target.value})}
              
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Enter Specialist</Form.Label>
            <Form.Control
              type="text"
              placeholder="Specialist"
              value={values.des}
              onChange={(e) => setValues({...values,des:e.target.value})}
              
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Image Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Specialist"
              value={values.img}
              onChange={(e) => setValues({...values,img:e.target.value})}
              
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

export default UpdateUser;
