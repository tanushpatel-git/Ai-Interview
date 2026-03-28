const userModel = require("../models/user.model");
const {jsonWebTokenCreate} = require("../utility/jsonWebTokenThings");

const googleAuth = async (req, res) => {
    try{
        const {name,email} = req.body;
        let user = await userModel.findOne({email})
        if(!user){
            user = await userModel.create({name, email})
        }
        let token = await jsonWebTokenCreate(user._id)
        res.cookie('token',token,{
            httpOnly: true,
            secure: false,
            sameSite: 'Strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            status: 'success',
            message: 'Login successfully',
            user
        })
    }catch(err){
        res.status(500).send({
            status:"failed",
            message: "Internal Server Error",
        })
    }
}

const logout = async (req, res) => {
    try{
       await res.clearCookie('token');
       res.status(200).send({
           status: 'success',
           message: 'Logout successfully',
       })
    }catch(err){
        res.status(500).send({
            status:"failed",
            message: "Internal Server Error",
        })
    }
}

module.exports= {googleAuth,logout};