const mongoose =  require('mongoose')

const adminSchema = new mongoose.Schema({
    adminName:{
        type:String
    },
    adminPassword:{
        type:String
    }
})

const adminModel =  mongoose.model('admin',adminSchema)

module.exports = adminModel


