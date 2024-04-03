import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Navigation from "./Navigation";
// import { GoogleLogin } from "@react-oauth/google";
import Axios from "axios";
import {Link,useNavigate } from "react-router-dom";

function AdminPanel({ getId }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
  getToken()
  });

const getToken = () => {
  Axios.get(`${process.env.REACT_APP_SERVER_API}/consultant/getConsultant`,{
    headers:{
      'access-token':localStorage.getItem("Token")
    }
  }).then((res) => setUsers(res.data));
}
 
  const deleteUser = (e) => {
    console.log(`User ID from MongoDB : ${e}`);
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if(confirmDelete){
      Axios.delete(`${process.env.REACT_APP_SERVER_API}/consultant/deleteConsultant/${e}`,{
        headers:{
          'access-token':localStorage.getItem("Token")
        }
      })
        .then(() => alert("User is Deleted Successsfully"))
        .catch((err) => console.log(`Error : ${err}`));
    }
   
  };

  const updateUser = (id) => {
    getId(id);
    navigate("/updateForm");
  };

  return (
    <div>
      <Navigation />
      <Container>
        <h1 className="display-4 text-center">Consultant List</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Specialist</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.title}</td>
                  <td>{user.des}</td>
                  <td>
                    {/* <Link to={`updateForm/${user._id}`}> */}
                    <button
                      className="btn btn-primary"
                      onClick={() => updateUser(user._id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* <Button href="/"> Go to Consultant Page</Button> */}
        <Link to="/">
          <Button type="button"> Go to Consultant Page</Button>
        </Link>
      </Container>
    </div>
  );
}

export default AdminPanel;


