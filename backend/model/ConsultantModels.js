const mongoose = require("mongoose");

const consultantSchema = new mongoose.Schema({
    title:{    
        type:String
    },
    des:{
        type:String
    },
    img:{
        type:String
    },
    image:{
        type:String
    }
});

const consultantModel = mongoose.model("consultants",consultantSchema)


module.exports = consultantModel