const Image = require('../models/image')
const {uploadTocloudianry}= require('../helper/cloudinary-helper')

const uploadImage = async(req, res)=>{
    try {
        if(!req.file){
            return res.status(400).json({
                success:false , 
                message:'file is required '
            })
        }
        const {url, publicId }= await uploadTocloudianry(req.file.path); 
        const newlyUploadedImage = new Image({
            url , 
            publicId, 
            uploadedBy:req.userInfo.userId , 
        })
        await newlyUploadedImage.save(); 
        res.status(201).json({
            success:true, 
            message:'image uploaded successfully ',
            image :newlyUploadedImage ,
        })
        
    } catch (error) {
        console.log(error ); 
        res.status(500).json({
            success:false, 
            message:"somethign went wrong "
        })
    }
}

const fetchImages = async(req, res )=>{
    try {
        const images = await Image.find({});
        if(images){
            return res.status(200).json({
                success:true , 
                data:images, 
            })
        }
        
    } catch (error) {
        console.log(error ); 
        res.status(500).json({
            success:false, 
            message:"somethign went wrong "
        })
    }
}

module.exports = {uploadImage, fetchImages}