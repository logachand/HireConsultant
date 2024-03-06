const express = require('express')
const reviewConsultantRoute =  express.Router();
const reviewConsutantModel = require('../model/reviewedConsultant')


reviewConsultantRoute.post('/createReview',async(req,res)=>{
        
        await reviewConsutantModel.create(req.body)
        .then((review) => res.json(review))
        .catch((err)=> res.json(err))
})

reviewConsultantRoute.get('/getReviewedConsultant', async(req,res)=>{
        await reviewConsutantModel.find()
        .then((reviewd) => res.json(reviewd))
        .catch((err)=>console.log(`Error is going on please check it ${err}`))
})


module.exports = reviewConsultantRoute
