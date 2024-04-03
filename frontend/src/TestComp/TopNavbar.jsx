import React from "react";
import "./css/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TopNavbar() {
    
  const getToken = window.localStorage.getItem("Token")

  
  return (
    <>
        <div className="container-fluid bg-dark text-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, Alandur, Chennai</small>
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
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://facebook.com"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://facebook.com"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-square btn-link rounded-0" href="https://facebook.com"><FontAwesomeIcon icon="fa-solid fa-user" /></a>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}


// <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
//         <a href="index.html" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
//             <h2 className="m-0">Hire Consultant</h2>
//         </a>
//         <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarCollapse">
//             <div className="navbar-nav ms-auto p-4 p-lg-0">
//                 <a href="index.html" className="nav-item nav-link active">Home</a>
//                 <a href="about.html" className="nav-item nav-link">About</a>
//                 <a href="courses.html" className="nav-item nav-link">Consultants</a>
//                 <div className="nav-item dropdown">
//                     <a href="https://facebook.com" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                     <div className="dropdown-menu bg-light m-0">
//                         {/* Route */}
//                         <a href="appointment.html" className="dropdown-item">Appointment</a>
//                         <a href="team.html" className="dropdown-item">Our Team</a>
//                         <a href="testimonial.html" className="dropdown-item">Testimonial</a>
//                         <Link to = "/adminPanel"><a className="dropdown-item">Admin Page</a></Link>
//                     </div>
//                 </div>
//                 <a href="contact.html" className="nav-item nav-link">Contact</a>
//             </div>
//            <div className="nav-item dropdown">
//             <a href="https://facebook.com" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" data-bs-toggle="dropdown" >Account</a>
//                     <div className="dropdown-menu bg-light m-0">
//                    { !getToken  ?
//                     <Link to ="/login"><a  href="https://facebook.com" className="dropdown-item" style={{textDecorationColor:"red"}}>Login</a></Link>:
//                     <Link to = "/login"><a href="https://facebook.com" onClick={()=> Logout()} className="dropdown-item">Logout</a></Link>
//                    } 
//                     </div>
//                 </div>
//         </div>


