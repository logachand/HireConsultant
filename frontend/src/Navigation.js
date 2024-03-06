import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Link to="/adminPanel"><Button type="submit">Admin</Button></Link>
          <Nav className="me-auto">
            <Link to="/createForm"> <Button type="submit">CreateConsultant</Button></Link>
            <Link to="/updateForm"> <Button type="submit">updateConsultant</Button></Link>
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Link to="/login">
            <Button type="submit" className="btn btn-danger">Login</Button></Link>
          </Col>
          <Col xs="auto">
            <Link to="/signup">
            <Button type="submit" className="btn btn-danger">Signup</Button></Link>
          </Col>
        </Row>
      </Form>
        </Container>
      </Navbar>
    )
}


export default Navigation