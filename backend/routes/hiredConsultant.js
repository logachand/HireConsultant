const express = require("express");
const hiredConsultantRoute = express.Router();
const hiredConsultantModel = require("../model/hiredConsultant");
const nodemailer = require("nodemailer");

// hiredConsultant Route

let confirmedEmail;
let confirmedConsultantName;
let confirmedConsultantEmail;
let confirmedConsultantDate;

hiredConsultantRoute.post("/createHiredConsultant", async (req, res) => {
  await hiredConsultantModel
    .create(req.body)
    .then((hired) => {
      confirmedEmail = hired.userEmail;
      confirmedConsultantName = hired.consultantDetails.consultantName;
      confirmedConsultantEmail = hired.consultantDetails.consultantEmail;
      confirmedConsultantDate = hired.consultationDate;

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "logachan08@gmail.com",
          pass: "hrbvllnmzmlsxrcj",
        },
      });

      const mailOptions = [
        {
          to: hired.userEmail,
          subject: `Congratulations, You Have Hired a Consultant`,
          html: `<h1>Congratulations!</h1><p>You have successfully hired a consultant 🎉. Please find the details below:</p><p>Consultant Name: ${hired.consultantDetails.consultantName}</p>
                    <p>Consultant Email: ${hired.consultantDetails.consultantEmail}</p>
                    <p>Consultation Date: ${hired.consultationDate}</p>
                    <p>Gmeet Link: <a href="https://meet.google.com/evq-hvmt-vin?pli=1">https://meet.google.com/evq-hvmt-vin?pli=1</a></p>`,
        },
        {
          to: hired.consultantDetails.consultantEmail,
          subject: `Congratulations, You Have Been Hired as a Consultant`,
          html: `<h1>Congratulations!</h1><p>You have been hired as a consultant🎉. Please find the details below:</p><p>UserName: ${hired.userName}</p>
                    <p>User Email: ${hired.userEmail}</p>
                    <p>User Phone Number: ${hired.userPhone}</p>
                    <p>Consultation Date: ${hired.consultationDate}</p>
                    <p>Accpet or Decline : <a href="${process.env.SERVER}/hiredConsultant/confirmationEmailAccept" style = "color:green" >Accept</a> &nbsp;&nbsp;&nbsp;
                    <a href="${process.env.SERVER}/hiredConsultant/confirmationEmailDecline" style = "color:red" >Decline</a></p><br> 
                    <p>Gmeet Link: <a href="https://meet.google.com/evq-hvmt-vin?pli=1">https://meet.google.com/evq-hvmt-vin?pli=1</a></p>`,
        },
      ];

      mailOptions.map((option) => {
        transporter.sendMail(option, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            return res.json({ message: "Mail sent", hiredInfo: hired });
          }
        });
      });
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

hiredConsultantRoute.get("/confirmationEmailAccept", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "logachan08@gmail.com",
      pass: "hrbvllnmzmlsxrcj",
    },
  });

  var mailOptions = {
    from: "logachan08@gmail.com",
    to: confirmedEmail,
    subject: `Again Congratulations, You Have Been Confirmed by Consultant`,
    html: `<b>Confrimation Mail for the Consultation</b><br><br><br>
            <p>Great! ${confirmedEmail}</p>
            <p>Consultant Name : ${confirmedConsultantName}</p>
            <p>Consultation Date : ${confirmedConsultantDate}</p>
            <p>Gmeet Link: <a href="https://meet.google.com/evq-hvmt-vin?pli=1">https://meet.google.com/evq-hvmt-vin?pli=1</a></p>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      const alertScript = "<script>alert('Confirmation email sent!');</script>";
      return res.send(alertScript);
    }
  });
});

hiredConsultantRoute.get(`/confirmationEmailDecline`, (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "logachan08@gmail.com",
      pass: "hrbvllnmzmlsxrcj",
    },
  });

  var mailOptions = {
    from: "logachan08@gmail.com",
    to: confirmedEmail,
    subject: `We are Sorry,You Have Not Confirmed by Consultant`,
    html: `<b>We are regret to Inform you....</b><br><br><br>
            <p>You was reject by the ${confirmedConsultantName}</p>
            <p>Consultant Name : ${confirmedConsultantName}</p>
            <p>Consultation Date : ${confirmedConsultantDate}</p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      const alertScript = "<script>alert('Declined The User');</script>";
      return res.send(alertScript);
    }
  });
});
module.exports = hiredConsultantRoute;
