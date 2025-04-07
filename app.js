require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const PORT = process.env.PORT; 
const connectToDb= require('./database/db.js')
const bookRoutes = require("./routes/book-routes.js")
const authrouter = require('./routes/auth-routes.js')
const homeRoutes = require('./routes/home-routes.js')
const adminRoutes = require("./routes/admin-routes.js")
const uploadImageRoute= require('./routes/image-routes.js')

connectToDb(); 
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use('/api/auth', authrouter);
app.use('/api/home', homeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/image', uploadImageRoute)

app.listen(PORT, (req,res)=>{
    console.log(`server running on port ${PORT}`);
    
})