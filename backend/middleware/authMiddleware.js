const jwt = require('jsonwebtoken')

const requireAuth = (req,res,next)=>{
   
    const token = req.headers["access-token"]
    if(!token){
        return res.json("we need token please provide it")
    }else {
        jwt.verify(token,process.env.TOKEN_SECRET,(err,decode)=>{
            if(err){
                res.json("Not Authenticated")
            }else {
                req.userId = decode.id
                next()
            }
        })
    }

}

module.exports = {requireAuth}