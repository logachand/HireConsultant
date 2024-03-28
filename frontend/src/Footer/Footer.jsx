import React from "react";
import "./footerStyle.css"
import {Link} from "react-router-dom";


export default function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>Best Consultant</h4>
              <ul>
                <li>
                  <a href="#">Consultant</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">Affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Get Service</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Book Sessions</a>
                </li>
                <li>
                  <a href="#">Get Best Deal</a>
                </li>
                <li>
                  <a href="#">Consultant Details</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Hire Consultant</h4>
              <ul>
                <li>
                  <a href="#">Best Service</a>
                </li>
                <li>
                  <a href="#">Fast Response</a>
                </li>
                <li>
                  <a href="#">Good Communication</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <Link to ="https://www.linkedin.com/in/logachander-b-606995202">
                  <i class="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
