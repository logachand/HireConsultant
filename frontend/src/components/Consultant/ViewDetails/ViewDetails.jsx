import React, { useState } from "react";
import "./ViewDetails.css";
import image1 from "./team-1.jpg";
import Nav from "../../../TestComp/Navbar";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function ViewDetails() {
  const consultantId = useParams();
  const [title, setTitle] = useState();
  const [des, setDes] = useState();
  console.log(consultantId.id);

  Axios.get(
    `${REACT_APP_SERVER_API}/consultant/getConsultantByID/${consultantId.id}`
  )
    .then((res) => {
      console.log("Data Is " + res.data.title + " " + res.data.des),
        setTitle(res.data.title);
      setDes(res.data.des);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <Nav />
      <div className="bgColor">
        <div className="wrapper">
          <div className="user-card">
            <div className="user-card-img">
              <img src={image1} alt="" />
            </div>
            <div className="user-card-info">
              <h2>{title}</h2>
              <p>
                <span>Email:</span> example@example.com
              </p>
              <p>
                <span>Occupation:</span> Web Developer
              </p>
              <p>
                <span>Description:</span>
                {des}
              </p>
              <p>
                <span>About me:</span> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
