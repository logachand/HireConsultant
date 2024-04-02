import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";


import Container from "@mui/material/Container";
// import Data from "./Data.json";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import Checkbox from "@mui/material/Checkbox";
// import Navigation from "../Navigation";
// import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Axios from "axios";
// import Carousel from "react-bootstrap/Carousel";
import TopNavbar from "../../TestComp/TopNavbar";
import Testimonal from "../../TestComp/Testimonal";
import MainNavbar from "../Navbar/MainNavbar";
import Rating from "@mui/material/Rating";
import { NavLink, Link } from "react-router-dom";
import img1 from "./hello.jpg"
import Footer from "../../Footer/Footer"

// const label = { inputProps: { "aria-label": "Checkbox demo" } };


export default function Consultant() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_SERVER_API}/consultant/getConsultant`, {
      headers: {
        "access-token": localStorage.getItem("Token"),
      },
    }).then((res) => setCards(res.data));
  });

  const getToken = window.localStorage.getItem("Token");
  const googleLogin = window.localStorage.getItem("Token")
  console.log(getToken);

  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <Testimonal />
      <Container maxWidth="lg">
        <h1
          className="display-4 text-center"
          style={{
            color: "#fff",
            backgroundColor: "#172554 ",
            textAlign: "center",
            border: "3px solid #172554",
            borderRadius: "4px",
            marginTop: "15px",
          }}
        >
          Consultant List
        </h1>
        <Grid container spacing={5} style={{ marginTop: "20px" }}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={4} ms={4} key={index}>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ padding: "30px", marginBottom: "30px" }}
              >
                
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={card.img}
                    alt="green iguana"
                    style={{
                      width: "128",
                      height: "128",
                      borderRadius: "50%", // Apply border radius for perfect circle
                      objectFit: "cover" // Maintain aspect ratio and cover the entire space
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.des}
                    </Typography>
                    <Link to={`/reviewConsutant/${card._id}`}><Rating
                      name="simple-controlled"
                      value={card.ratings}
                    /></Link>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {!getToken && !googleLogin ? (
                    <NavLink to={"/joinAs"}>
                      <Button
                        variant="contained"
                        size="medium"
                        style={{ fontSize: "13px" }}
                        href="/hireForm"
                      >
                        Hire Me
                      </Button>
                    </NavLink>
                  ) : (
                    <NavLink to={`/hireForm/${card._id}`}>
                      <Button
                        variant="contained"
                        size="medium"
                        style={{ fontSize: "13px" }}
                        href="/hireForm"
                      >
                        Hire Me
                      </Button>
                    </NavLink>
                  )}

                  {!getToken && !googleLogin ? (
                    <Link to="/joinAs">
                      <Button
                        variant="contained"
                        size="medium"
                        style={{ fontSize: "13px" }}
                      >
                        View Details
                      </Button>
                    </Link>
                  ) : (
                    <Link to={`/viewDetails/${card._id}`}>
                      <Button
                        variant="contained"
                        size="medium"
                        style={{ fontSize: "13px" }}
                      >
                        View Details
                      </Button>
                    </Link>
                  )}
                  {/* <Checkbox
                    {...label}
                    defaultChecked
                    
                  /> */}
                  {/* <CheckCircleOutlinedIcon/> */}
                  <Link to={card.consultantLinkedIn}><LinkedInIcon  style={{color:"blue", marginLeft: "auto", fontSize:"33px"}}/></Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

        
 


      {/* <Footer/> */}
    </>
  );
}

