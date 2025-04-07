const express = require('express')
const router = express.Router(); 
const authmiddleware= require('../middleware/auth-middleware')

router.get('/welcome',authmiddleware, (req,res)=>{
    const {username , userId , role }= req.userInfo; 
    res.json({
        message:'welcome to the home page ',
        user:{
            _id :userId , 
            username :username, 
            role:role,
        }
    })
})

module.exports =router ;