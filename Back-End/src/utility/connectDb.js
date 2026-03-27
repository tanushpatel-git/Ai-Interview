const mongoose = require("mongoose");
require("dotenv").config({quiet: true});


const connectDb = async () => {
    try{
        let url = process.env.DATABASE_URL
        if (!url) {
            console.log("Missing DATABASE_URL")
        }
        await mongoose.connect(url)
        console.log("MongoDB Connected")
    }catch(err){
        console.log("DataBase is Not Connected Successfully" , err)
    }
}

module.exports = connectDb;