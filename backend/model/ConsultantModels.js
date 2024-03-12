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
    des:{
        type:String
    },
    img:{
        type:String
    }
});

const consultantModel = mongoose.model("consultants",consultantSchema)


module.exports = consultantModel