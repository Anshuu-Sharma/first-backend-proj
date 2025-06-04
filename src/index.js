// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
    
})



/*
Approach 1:
import express from "express";
const app = express();
;import { DB_NAME } from "./constants";
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODV_URI}/${DB_NAME}`)    
        app.on("error", () => {
            console.log("Error: ", error);
            throw error
        })    
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error
        
    }
})()
*/
