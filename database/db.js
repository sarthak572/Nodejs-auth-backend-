const mongoose = require("mongoose") ; 

const connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://sarthakbansal2023:sarthak123@cluster0.mudnyn0.mongodb.net/");
        console.log("connection successfull to database");
        
    } catch (error) {
        console.log('connection failed');
        process.exit(1);
    }
}

module.exports= connectToDb; 