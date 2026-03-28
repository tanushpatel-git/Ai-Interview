const app = require('./src/app')
const connectDb = require("./src/utility/connectDb");
require("dotenv").config({quiet : true})




const port = process.env.PORT;




app.listen(port, () => {
    try{
        console.log(`Server started on port ${port}`);
        connectDb()
    }catch(e){
        console.log("Failed to connect to the server");
    }
})