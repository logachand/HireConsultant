import React, { useEffect, useState } from "react";
import "./ViewDetails.css";
import image1 from "./team-1.jpg";
import TopNavbar from "../../../TestComp/TopNavbar";
import { useParams,Link } from "react-router-dom";
import Axios from "axios";

export default function ViewDetails() {
  const consultantId = useParams();
  const [title, setTitle] = useState();
  const [consultantEmail, setConsultantEmail] = useState()

  const [des, setDes] = useState();
  console.log(consultantId.id);


  useEffect(()=>{
    Axios.get(
      `${process.env.REACT_APP_SERVER_API}/consultant/getConsultantByID/${consultantId.id}`,{
        headers:{
          'access-token':localStorage.getItem("Token")
        }
      }
    )
      .then((res) => {
        setTitle(res.data.title);
        setConsultantEmail(res.data.consultantEmail)
        setDes(res.data.des);
      })
      .catch((err) => console.log(err));

  })

  return (
    <>
      <TopNavbar/>
      <div className="bgColor">
        <div className="wrapper">
          <div className="user-card">
            <div className="user-card-img">
              <img src={image1} alt="" />
            </div>
            <div className="user-card-info">
              <h2>{title}</h2>
              <p>
                <span>Email:</span> {consultantEmail}
              </p>
              <p>
                <span>Occupation:</span> Web Developer
              </p>
              <p>
                <span>Description:</span>
                {des}
              </p>
              <p>
                <span>About me:</span> 
                I'm a consultant and Help the peoples to solve the problems for them and 
                give the Better solution from my end 
              </p>
              <Link to={`/reviewConsutant/${consultantId.id}`}><button style={{marginTop:"3px",padding:"2px", borderRadius:"5px"}}>Review</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
