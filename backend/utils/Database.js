const mongoose =  require('mongoose')
const mongoURL = process.env.DB_SERVER 

const connectDB = async() =>{
    try{
        const con = await mongoose.connect(mongoURL)
        console.log("DB is Connected Succesfully");
    }catch(err){
        console.log(`DB is Not Connected`+err);
        process.exit(1)
    }
}

module.exports = connectDB