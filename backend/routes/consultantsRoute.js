const express = require('express')
const consultantRoute = express.Router()
const consultantModel = require('../model/ConsultantModels')
const multer = require('multer')


// Create Consultant Data

consultantRoute.post("/createConsultant",async(req,res)=>{     // here upload.single('file')  -> file is name from Frontend 
    const title = req.body.title;
    const des = req.body.des;
    const img = req.body.img;

    const newConsultant = new consultantModel({title:title,des:des,img:img})
    const saveConsultant =  await newConsultant.save()
    .then((consultant)=>{
        res.json({
            message:"Card is Created"
        })
    }).catch((err)=>{
        res.json({
            message:`Error is Going on please Check it ${err}`
        })
    })
})



// Get all the Consultant

consultantRoute.get("/getConsultant",async(req,res)=>{
    await consultantModel.find()
    .then((cards)=>res.json(cards))
    .catch((err)=>res.json({status:"Fails Please Check the Route"}))
})


//get Consultant by ID   
consultantRoute.get('/getConsultantByID/:id', async (req, res) => {
    const consultantId = req.params.id;
    try {
        const consultant = await consultantModel.findById(consultantId);
        if (consultant) {
            res.json(consultant);
        } else {
            res.status(404).json({ message: 'Consultant not found' });
        }
    } catch (err) {
        res.status(500).json({ message: `Error occurred: ${err}` });
    }
});


// updateConsultant 

consultantRoute.put('/updateConsultant/:id',(req,res)=>{
  
    if(!req.body){
        return res.status(400).send({
            message:`Please Check your Request Body`
        })
    }

    const consultantId =  req.params.id
    consultantModel.findByIdAndUpdate(consultantId,req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(404).send({
                message:`Cannot Update Consultant with this ${consultantId}`
            })
        } else {
            res.status(200).send(data)
        }
    })
    .catch((err) => res.json({message : `Error is going on Please check the Endpoints ${err}`}))
})



// delete consultant

consultantRoute.delete("/deleteConsultant/:id",async(req,res)=>{
    const consultantID = req.params.id
    await consultantModel.findByIdAndDelete(consultantID)
    .then(()=>{
        res.json({
            success:true,
            message:`Consultant is Deleted Successfully on ${consultantID}`
        })
    })
    .catch((err)=>res.json({message:`Error is Going on please check: ${err}`}))
})


module.exports = consultantRoute;