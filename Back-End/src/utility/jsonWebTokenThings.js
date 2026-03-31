const jwt = require('jsonwebtoken');
require('dotenv').config({quiet: true});

const jsonWebTokenCreate = async (userId) => {
    try{
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })
        return token;
    }catch(err){
        console.log("Token Can't created ", err);
    }
}

module.exports={jsonWebTokenCreate};