const jwt = require('jsonwebtoken') ;

const authmiddleware = (req,res , next)=>{
    console.log('auth middleware is working fine ')
    const authheader = req.headers["authorization"]; 
    console.log(authheader); 
    const token = authheader && authheader.split(" ")[1]; 

    if(!token){
        return res.status(401).json({
            success:false , 
            message:'access denied , no auth token '
        })
    }

    try {
        const decodedToken = jwt.verify(token , process.env.JWT_SECRET_KEY); 
        console.log(decodedToken); 
        req.userInfo= decodedToken; 
        next(); 
        
    } catch (error) {
        return res.status(500).json({
            success:false , 
            message:'access denied , no auth token '
    })
    }
}

module.exports =authmiddleware; 