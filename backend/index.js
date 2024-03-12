const express = require('express')
const app = express()
const morgan=require('morgan')
const login_route =  require('./routes/login')
const consultantRoute = require('./routes/consultantsRoute')
const hiredConsultantRoute = require('./routes/hiredConsultant')
const cors = require('cors')
const connectDB = require('./utils/Database')
const {requireAuth} = require('./middleware/authMiddleware')
const dotenv = require('dotenv')
const reviewConsultantRoute = require('./routes/reviewConsultant')
dotenv.config()
const PORT =  process.env.PORT


// app.use(morgan('tiny'))

app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'))

// DB Connection

connectDB()

// checking

app.get('/',(req,res)=>{
    res.send("Hello world")
})


// Routes
app.use('/userCredentials',login_route)
app.use('/consultant',requireAuth,consultantRoute)
app.use('/hiredConsultant',hiredConsultantRoute)
app.use('/reviewConsultant',reviewConsultantRoute)


app.listen(PORT,()=>{
    console.log(`Your Server is Running on ${PORT}`);
})


