const mongoose =  require('mongoose')


const reviewConsutant =  new mongoose.Schema({
    consultantName :{
        type : String
    },
    userName :{
        type : String
    },
    review:{
        type:String
    },
    points:{
        type:Number
    },
    value:{
        type:Number
    }
})


const reviewConsutantModel =  mongoose.model('reviewConsultant',reviewConsutant)

module.exports = reviewConsutantModel