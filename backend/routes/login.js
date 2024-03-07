const express = require("express");
const login_route = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const LoginModel = require("../model/login_Model");
require('dotenv').config()
const generateToken = require('../utils/jwtGeneration')

// Token Genereation 

let token 



// Register Route
login_route.post("/register", async (req, res) => {
  await LoginModel.create(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => res.json(err));
});


// login Route

login_route.post("/login", async (req, res) => {

  const { email, password } = req.body;
  await LoginModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
        
          token = generateToken(user)
          res.status(200).json({
            message:"success",
            loginToken : token
          });
        } else {
          res.status(404).json("The Password is Incorrect");
        }
      } else {
        res
          .status(404)
          .json("Invalid");
      }
    })
    .catch((err) =>
      console.log(`Error is Going On please check it out and Solve it : ${err}`)
    );
});

// Forgot Password


login_route.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  const forgotEmail =  await LoginModel.findOne({ email: email }).then((user) => {
    if (!user) {
      res.status(404).send({ status: "User Not exists" });
    }



    //  token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });

    token = generateToken(user)
    console.log(token);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "logachan08@gmail.com",
        pass: "hrbvllnmzmlsxrcj",
      },
    });

    var mailOptions = {
      from: "logachan08@gmail.com",
      to: email,
      subject: `Reset your Password`,
      // text: `${process.env.CLIENT}/resetPassword/${user._id}/${token}`,
      html: `<b>This is Your Reset Password Mail</b><br><br><br>
             <a href="${process.env.CLIENT}/resetPassword/${user._id}/${token}"><button>Reset Password</button></a>`, 
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        return res.json({message:"success",token:token});
      }
    });
  });
});

// Reset-Password

login_route.post("/resetPassword/:id/:token", (req, res) => {
  const { id, token } = req.params;
  const newPassword = req.body.newPassword;
  const confirmPassword = req.body.confirmPassword;

  var validPassword;

  if (newPassword === confirmPassword) {
    validPassword = confirmPassword;
  } else {
    res.status(404).send("Invalid")
  }
  console.log(validPassword);
  jwt.verify(token, process.env.TOKEN_SECRET, async (err, decode) => {
    if (err) {
      return res.json({ status: "Token is invalid" });
    } else {
      await LoginModel.findByIdAndUpdate({ _id: id }, { password:validPassword })
        .then((user) => res.send("success"))
        .catch((err) => res.send(`Error : ${err}`));
    }
  });
});

module.exports = login_route;
