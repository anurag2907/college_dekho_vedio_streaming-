import dotenv from "dotenv";  
import express from "express";

import connectDB from "./db/index.js";


dotenv.config({
    path:'./.env' 
})

const app = express()


connectDB()
.then(() => {
   app.listen(process.env.PORT) ||8000,() => {
    console.log(`app is listening on port ${process.env.PORT}`);
   }
})
.catch((error) => {
    console.log("Erroe connectiong to database",error );
})






















// ------------------first method to connect database-------------------
// ;(async() => {

//     try
//     {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//        app.on("errror",(error) =>{
//         console.log("errror",error);
//         throw error
//        })

//        app.listen(process.env.PORT,() => {
//         console.log(`app is litening  on port ${process.env.Port}`)
//        })
//     }
//     catch
//     {
//         console.error("Error :", error)
//         throw err
//     }

// }