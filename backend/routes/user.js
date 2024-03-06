const express = require("express");
const route = express.Router();
const userModel = require("../model/userModel");

// Get allUsers
route.get("/", (req, res) => {
  userModel
    .find()
    .then(users => res.json(users))
    .catch((err) => {
      res.status(404).send(`${err}`);
    });
});

// GetUserWithId

route.get('/:id',async(req,res)=>{
    const userWithId = await userModel.findById(req.params.id)
    if(!userWithId){
        res.status(404).json({success:false,message:"Error on the User Details"})
    }else{
        res.status(200).json({
            success:true,
            UserDetails: userWithId
        })
    }
})


//  add user

route.post("/add", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new userModel(({username, password}));
  const saveUser = await newUser.save()
  .then(()=>{
    res.json({
        message:`User is Added!`
    })
  }).catch((err)=> res.json({ message:`Error : ${err}`}))
});

// updateUser

route.put('/update/:id',(req,res)=>{
    userModel.findById(req.params.id)
    .then(user =>{
        user.username =  req.body.username;
        user.password = req.body.password

        user.save()
        .then(() => res.json({
            success:true,
            message:`User is Updated Successfully`
        })).
        catch((err)=> res.json({ message:`Error :${err}`}))
    })
    .catch((err)=> res.json({message:`Error ${err}`})) 

})


// delete User
route.delete("/:id",(req,res)=>{
    const userID =  req.params.id;
    const userData = userModel.findByIdAndDelete(userID)
    .then(() =>{
        res.json({
            success: true,
            message:`User is Deleted Sucessfully on ${userID}`,
        })
    }).catch((err)=>{
        res.json({success:false,message:`Error : ${err}`})
    })
})

module.exports = route;
