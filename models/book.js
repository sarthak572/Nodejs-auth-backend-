const mongoose= require("mongoose"); 

const bookSchema = new mongoose.Schema({
    title:{
        type:String , 
        required:[true , 'book title is required '],
        trim:true , 
        maxlenght :[100, 'book title can not be more than 100']
    },
    author:{
        type:String , 
        required:[true , 'Author name  is required '],
        trim:true 
    },
    year:{
        type:Number , 
        required:[true , "publication year is required "],
        min:[1000, 'year must be atleast 1000'],
        max:[new Date().getFullYear(), "cannot cannot be in future "]
        },
    createdAt:{
        type:Date, 
        default:Date.now
    }
})

module.exports= mongoose.model("Book", bookSchema); 