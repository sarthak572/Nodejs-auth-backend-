const cloudinary = require('../config/cloudinary-config')

const uploadTocloudianry= async (filePath )=>{
    try {
        const result = await cloudinary.uploader.upload(filePath)
        return {
            url :result.secure_url,
            publicId : result.public_id
        }
    } catch (error) {
        console.error("error while uplaoding to cloudianary "); 
        throw new Error("error while upaloding ")
        
    }
}

module.exports= {uploadTocloudianry}