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
// import Checkbox from "@mui/material/Checkbox";
// import Navigation from "../Navigation";
// import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import Axios from "axios";
// import Carousel from "react-bootstrap/Carousel";
import TestHome from "../../TestComp/TestHome";
// const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Consultant() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/consultant/getConsultant").then((res) =>
      setCards(res.data)
    );
  });

  return (
    <>
      <TestHome/>
      {/* <Typography
        variant="h4"
        align="center"
        style={{ padding: "13px", fontSize: "50px" }}
      >
        HIRE THE BEST CONSULTANT
      </Typography> */}

      <Container maxWidth="lg">
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
                    height="140"
                    image={card.img}
                    alt="green iguana"
                    style={{
                      width: "128",
                      height: "128",
                      borderRadius: "12px",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.des}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    variant="contained"
                    size="medium"
                    style={{ fontSize: "13px" }}
                    href="/hireForm"
                  >
                    Hire Me
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                  >
                    Review
                  </Button>
                  {/* <Checkbox
                    {...label}
                    defaultChecked
                    
                  /> */}
                  {/* <CheckCircleOutlinedIcon/> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
