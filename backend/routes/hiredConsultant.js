const express = require('express')
const hiredConsultantRoute = express.Router()
const hiredConsultantModel = require('../model/hiredConsultant')



// hiredConsultant Route

hiredConsultantRoute.post('/createHiredConsultant',async(req,res)=>{
    await hiredConsultantModel.create(req.body)
    .then((hired)=> res.json(hired))
    .catch((err)=> res.json({
        message:`Error is going on please Check : ${err}`
    }))
})


// getHiredConsultant


hiredConsultantRoute.get('/getHiredConsulted',(req,res)=>{
    hiredConsultantModel.find()
    .then((hired)=>res.json(hired))
    .catch((err)=>res.json(err))
})


module.exports = hiredConsultantRoute