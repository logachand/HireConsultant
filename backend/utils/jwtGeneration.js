const jwt = require('jsonwebtoken')
const generateToken = (user) =>
     jwt.sign({id:user._id},
        process.env.TOKEN_SECRET, 
        { expiresIn: "1d" 
})

 




module.exports = generateToken