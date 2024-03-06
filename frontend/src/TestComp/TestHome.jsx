import React from "react";
import "./css/style.css";
import image1 from "./img/carousel-1.jpg";
import image2 from "./img/carousel-2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from "react-router-dom";
import Testimonal from "./Testimonal";

export default function TestHome() {
  
  const navigate = useNavigate()
  const Logout = () =>{
    window.localStorage.removeItem("Token")
    navigate("/login")
  }
  
  
  return (
    <>
        <div className="container-fluid bg-dark text-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, New York, USA</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+91 91505 41812</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-square btn-link rounded-0" href=""><FontAwesomeIcon icon="fa-solid fa-user" /></a>
                </div>
            </div>
        </div>
    </div>


    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h2 className="m-0">Hire Consultant</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="courses.html" className="nav-item nav-link">Consultants</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu bg-light m-0">
                        {/* Route */}
                        <a href="appointment.html" className="dropdown-item">Appointment</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <Link to = "/adminPanel"><a href="" className="dropdown-item">Admin Page</a></Link>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
           <div className="nav-item dropdown">
            <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" data-bs-toggle="dropdown" >Account</a>
                    <div className="dropdown-menu bg-light m-0">
                    <Link to ="/login"><a className="dropdown-item" style={{textDecorationColor:"red"}}>Login</a></Link>
                    <Link to ="/signup"><a href="appointment.html" className="dropdown-item">Register</a></Link>
                    <Link to = "/login"><a href="" onClick={()=> Logout()} className="dropdown-item">Logout</a></Link>
                    </div>
                </div>
           
        </div>
    </nav>
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={image1} alt="Image"/>
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown" style={{fontSize:"35px", fontFamily:"sans-serif", fontStyle:""}}>
                        Hire The Best Consultant
                      </h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-5">
                        Learn More
                      </a>
                      <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">
                        Our Consultants
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={image2} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown">
                        Safe Driving Is Our Top Priority
                      </h1>
                      <a href="" className="btn btn-primary py-sm-3 px-sm-5">
                        Learn More
                      </a>
                      <a href="" className="btn btn-light py-sm-3 px-sm-5 ms-3">
                        Our Courses
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Testimonal/>
    </>
  );
}

