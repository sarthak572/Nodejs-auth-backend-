

const User = require('../models/User')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const register= async(req, res)=>{
    try {
        const {username , email , password , role }= req.body ; 
        const existingUser = await User.findOne({$or :[{username}, {email }]}); 
        if(existingUser){
            return res.status(400).json({
                success:false , 
                message:"try with different username or email "
            })
        }
        const salt =await  bcrypt.genSalt(10); 
        const hashedpassword = await bcrypt.hash(password, salt ); 

        const newUser = new User({
            username , 
            email, 
            password :hashedpassword, 
            role, 
        })
        await newUser.save(); 

        if(newUser){
            res.status(201).json({
                success:true, 
                message:"User registered Successfully ", 
            })
        }else{
            res.status(400).json({
                success:false, 
                message:"unable to register user ",
            })
        }
        
    } catch (error) {
        console.log(error ); 
        res.status(500).json({
            success:false,
            message:'some error occured . Please try again ',
        })
    }
}

const login = async(req, res)=>{
    try {
        const {username , password }= req.body ; 
        const user = await User.findOne({username}); 
        if(!user){
            return res.status(400).json({
                success:"false",
                message:"user does not exist "
            })
        }


        const passwordMatch = await bcrypt.compare(password, user.password); 
        if(!passwordMatch)
        {
            return res.status(400).json({
                success:false,
                message:"incorrect password"
            })
        }
        const token = jwt.sign({
            userId :user._id, 
            username :user.username, 
            role  :user.role, 
        }, process.env.JWT_SECRET_KEY,{
            expiresIn:'15m'
        })

        res.status(200).json({
            success:true, 
            message:"logged in successfully ",
            accessToken:token,
        })

        
    } catch (error) {
        console.log(error ); 
        res.status(500).json({
            success:false,
            message:'some error occured . Please try again ',
        })
    }
}

module.exports= {register, login}; 