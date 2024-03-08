import React from "react";
// import "./css/style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./lib/animate/animate.min.css";
// import "./lib/owlcarousel/assets/owl.carousel.min.css";
import image1 from "./img/carousel-1.jpg";
import image2 from "./img/carousel-2.jpg";
import team1 from "./img/team-1.jpg"
import team2 from "./img/team-2.jpg"
import team3 from "./img/team-3.jpg"
import team4 from "./img/team-4.jpg"


export default function Testimonal() {
  return (
    <>
      {/* <div className="container-xxl py-6">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase mb-2">Consultants</h6>
            <h1 className="display-6 mb-4">What Our Clients Say!</h1>
          </div>
        </div>
      </div> */}


      {/* <!-- Team Start --> */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={image1} alt=""/>
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown" style={{fontSize:"35px", fontFamily:"sans-serif", fontStyle:""}}>
                        Hire The Best Consultant
                      </h1>
                      <a href="https://linkedin.com" className="btn btn-primary py-sm-3 px-sm-5">
                        Learn More
                      </a>
                      <a href="https://linkedin.com" className="btn btn-light py-sm-3 px-sm-5 ms-3">
                        Our Consultants
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={image2} alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <h1 className="display-2 text-light mb-5 animated slideInDown">
                        Safe Driving Is Our Top Priority
                      </h1>
                      <a href="https://linkedin.com" className="btn btn-primary py-sm-3 px-sm-5">
                        Learn More
                      </a>
                      <a href="https://linkedin.com" className="btn btn-light py-sm-3 px-sm-5 ms-3">
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
    <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}}>
                <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
                <h1 className="display-6 mb-4">We Have Experience Of Consultants</h1>
            </div>
            <div className="row g-0 team-items">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src={team1} alt=""/>
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href="https://linkedin.com"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href="https://linkedin.com"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href="https://linkedin.com"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Spider Man</h5>
                            <span>Super Hero</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src={team2} alt=""/>
                    
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Taylor swift</h5>
                            <span>Trainer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src={team3} alt=""/>
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Sam Daniel</h5>
                            <span>Trainer</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative">
                        <div className="position-relative">
                            <img className="img-fluid" src={team4} alt=""/>
                            <div className="team-social text-center">
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-outline-primary border-2 m-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">Jack Man</h5>
                            <span>Trainer</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </>
  );
}

