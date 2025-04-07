
const Book = require("../models/book")

const getAllBooks = async(req , res)=>{
    const books = await Book.find({}); 
    if(books){
        res.status(200).json({
            success:true,
            message:"these are all the books in database ",
            data:books
        })
    }else{
        res.status(404).json({
            success:false , 
            message:"unable to fetch books from the database "
        })
    }
}


const getBookById = async(req , res)=>{
    const getBookId = req.params.id; 
    const bookByid = await Book.findById(getBookId); 
    if(bookByid){
        res.status(200).json({
            success:true,
            data:bookByid,
        })
    }else{
        res.status(404).json({
            success:false , 
            message:"book not found with this id "
        })
    }

}

const addBook = async(req , res)=>{
    try {
    const formData = req.body; 
    const newBook = await Book.create(formData) ; 
    if(newBook){
        res.status(201).json({
            success:true , 
            message:"book added successfully ",
            data : newBook ,
        })
    }
    } catch (error) {
        console.log(error); 
    }
}

const updateBook = async(req , res)=>{
    const updatedBookData = req.body; 
    const getCurrentBookData = req.params.id; 
    const updatedBook = await Book.findByIdAndUpdate(getCurrentBookData, updatedBookData,{
        new:true
    })

}
const deleteBook  = async(req , res)=>{
    const getbookId = req.params.id;
    const bookByid = await Book.findByIdAndDelete(getbookId);
    if(!bookByid){
        res.status(404).json({
            success:false , 
            message:"not able to delete book with this id "
        })
    }else {
        res.status(200).json({
            success:true,
            data:bookByid
        })
    }
}

module.exports={getAllBooks,getBookById,addBook,updateBook, deleteBook}