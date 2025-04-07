const express = require('express')
const authmiddleware = require('../middleware/auth-middleware'); 
const adminmiddleware = require('../middleware/admin-middleware')
const router = express.Router(); 

router.get('/welcome',authmiddleware,adminmiddleware,  (req,res)=>{
    res.json({
        message:'welcome to the new sarthak admin page '
    })
})

module.exports = router; 