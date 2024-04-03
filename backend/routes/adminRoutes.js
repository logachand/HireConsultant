const express =  require('express');
const admin_route = express.Router();
const jwt =  require("jsonwebtoken");
const adminModel = require("../model/adminModel")
const generateToken = require("../utils/jwtGeneration")


let adminToken



// Register the Admin 
admin_route.post(`/adminRegister`,(req,res)=>{
    const {
        adminName,
        adminPassword
    } =  req.body

    adminModel.create({adminName,adminPassword})
    .then((admin)=>{
        res.json({
            message:"Admin Created Successfully",
            adminCredentails:admin
        })
    })
    .catch((err)=>{
         res.json(err)
     })
})

// adminLogin


admin_route.post(`/adminLogin`,(req,res)=>{
    const {
        adminName,
        adminPassword
    } =  req.body

    adminModel.findOne({adminName: adminName})
    .then((adminResponse) => {
        if(adminResponse){
            if(adminResponse.adminPassword === adminPassword){
                adminToken = generateToken(adminResponse)
                res.json({
                    message:"Admin Logged In Successfully",
                    adminCredentails:adminResponse,
                    adminToken:adminToken
                })   
            }
        }
    })
    .catch((err)=>{
         res.json(err)
     })
        
            
})

module.exports = admin_route;

