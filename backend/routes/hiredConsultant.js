const express = require("express");
const hiredConsultantRoute = express.Router();
const hiredConsultantModel = require("../model/hiredConsultant");
const nodemailer = require("nodemailer");

// hiredConsultant Route

hiredConsultantRoute.post("/createHiredConsultant", async (req, res) => {
  await hiredConsultantModel
    .create(req.body)
    .then((hired) => {
      
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "logachan08@gmail.com",
              pass: "hrbvllnmzmlsxrcj",
            },
          });
        
          // For Consultation Detail Mail to User
          // var mailOptions = {
          //   from: "logachan08@gmail.com",
          //   to: [hired.userEmail, hired.consultantDetails.consultantEmail],  //  Send Mail for User and Consultant
          //   subject: `Congratulations Consultant Hired`,

          //   html: `<h1>Kudos to you</h1><br><br>
          //           <h3>Consutlant Details </h3>
          //           <p>Consultant Name : ${hired.consultantDetails.consultantName} <br>
          //           <p>Consultant Email : ${hired.consultantDetails.consultantEmail} <br>
          //           <p>Consultant Phone Number: ${hired.consultantDetails.consultantPhone} <br>
          //           <p>Consultation Date : ${hired.consultationDate} <br>
          //           <p>Gmeet Link : </p> <a href="https://meet.google.com/evq-hvmt-vin?pli=1"> https://meet.google.com/evq-hvmt-vin?pli=1</a>` 
                
          // };

          const mailOptions = [
            {
              to: hired.userEmail,
              subject: `Congratulations, You Have Hired a Consultant`,
              html: `<h1>Congratulations!</h1><p>You have successfully hired a consultant. Please find the details below:</p><p>Consultant Name: ${hired.consultantDetails.consultantName}</p><p>Consultant Email: ${hired.consultantDetails.consultantEmail}</p><p>Consultation Date: ${hired.consultationDate}</p><p>Gmeet Link: <a href="https://meet.google.com/evq-hvmt-vin?pli=1">https://meet.google.com/evq-hvmt-vin?pli=1</a></p>`
            },
            {
              to: hired.consultantDetails.consultantEmail,
              subject: `Congratulations, You Have Been Hired as a Consultant`,
              html: `<h1>Congratulations!</h1><p>You have been hired as a consultant. Please find the details below:</p><p>UserName: ${hired.userName}</p><p>User Email: ${hired.userEmail}</p><p>User Phone Number: ${hired.userPhone}</p><p>Consultation Date: ${hired.consultationDate}</p><p>Gmeet Link: <a href="https://meet.google.com/evq-hvmt-vin?pli=1">https://meet.google.com/evq-hvmt-vin?pli=1</a></p>`
            }
          ];

          mailOptions.map(option =>{
            transporter.sendMail(option,function (error, info) {
              if (error) {
                console.log(error);
              } else {
                return res.json({message:"Mail sent", hiredInfo: hired });
              }
            });
          })
    })
    .catch((err) =>
      res.json({
        message: `Error is going on please Check : ${err}`,
      })
    );
});

// getHiredConsultant

hiredConsultantRoute.get("/getHiredConsulted", (req, res) => {
  hiredConsultantModel
    .find()
    .then((hired) => res.json(hired))
    .catch((err) => res.json(err));
});

module.exports = hiredConsultantRoute;
