const mongoose = require('mongoose')
 
const loginUser =  new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const LoginModel =  mongoose.model('logins',loginUser)

module.exports = LoginModel