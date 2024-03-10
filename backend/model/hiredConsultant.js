const mongoose = require("mongoose");

const hireConsultant = new mongoose.Schema({
 
  userName: {
    type: String,
  },
  userEmail:{
    type:String
  },
  userPhone:{
    type:String
  },
  age: {
    type: Number,
  },
  hear: {
    type: String,
  },
  consultantDetails: {
    type: {
      consultantName:{
        type:String,
        default:""
      },
      consultantEmail:{
        type:String,
        default:"null"
      },
      consultantPhone:{
        type:String,
        default:"null"
      }
    },
    default:""
  },
  consultationDate: {
    type:String
  }
});

const hiredConsultantModel = mongoose.model('hiredConsultant',hireConsultant)

module.exports = hiredConsultantModel
