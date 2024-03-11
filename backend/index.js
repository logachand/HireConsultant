const express = require('express')
const app = express()
const login_route =  require('./routes/login')
const consultantRoute = require('./routes/consultantsRoute')
const hiredConsultantRoute = require('./routes/hiredConsultant')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const reviewConsultantRoute = require('./routes/reviewConsultant')
dotenv.config()
const PORT =  process.env.PORT



app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'))


// checking

app.get('/',(req,res)=>{
    res.send("Hello world")
})


// Routes
app.use('/userCredentials',login_route)
app.use('/consultant',consultantRoute)
app.use('/hiredConsultant',hiredConsultantRoute)
app.use('/reviewConsultant',reviewConsultantRoute)

const mongoURL = process.env.DB_SERVER 

mongoose.connect(mongoURL)
.then(()=>{
    console.log("DB is Connected Succesfully");
}).catch((err)=>{
    console.log("DB is Not Connected");
})

app.listen(PORT,()=>{
    console.log(`Your Server is Running on ${PORT}`);
})

