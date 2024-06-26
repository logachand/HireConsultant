const mongoose = require("mongoose");

const consultantSchema = new mongoose.Schema({
    title:{      // Consultant Name 
        type:String
    },
    consultantEmail:{
        type: String, 
    },
    consultantPhone:{
        type:String
    },
    consultantPostion:{
        type:String
    },
    consultantLinkedIn:{
        type:String
    },
    hiredMembers : {
        type:Number,
        default:0
    },
    des:{
        type:String
    },
    img:{
        type:String
    },
    ratings:{
        type:Number,
        default:0
    }
});

const consultantModel = mongoose.model("consultants",consultantSchema)


module.exports = consultantModel