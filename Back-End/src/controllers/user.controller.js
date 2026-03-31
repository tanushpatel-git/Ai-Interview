const userModel = require("../models/user.model.js");
const { jsonWebTokenCreate } = require("../utility/jsonWebTokenThings.js");

const userCreate = async (req, res) => {
    try {
        // required data want to do a things
        const data = req.body;
        const userData = await userModel.create(data);
        const token = await jsonWebTokenCreate(userData._id);

        // this is a cookie send code
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        // this is a response send code
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: userData
        });
    } catch (error) {
        // if some error come on that time code is this by using try and catch block 
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const userLogin = async (req, res) => {
    try {
        const data = req.body;
        const userData = await userModel.findOne({
            $and: [
                { email: data.email },
                { password: data.password }
            ]
        });

        // this is a code when user not found 
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        // this is a code to send a cookie when user found
        const token = await jsonWebTokenCreate(userData._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        // this is a respond when user found 
        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: userData
        });
    } catch (error) {
        // if some error come on that time code is this by using try and catch block 
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const userLogout = async (req, res) => {
    try {

        // this is a code to clear the cookie form frontend 
        res.clearCookie("token");

        // this is a response when user logout successfully 
        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        });
    } catch (error) {
        // if some error come on that time code is this by using try and catch block 
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

const getCurrentUser = async (req, res) => {
    try {
        // this is a code to get the current user data from the database 
        
        const userData = await userModel.findById(req.userId);

        
        // this is a response when user found 
        return res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: userData
        });
    } catch (error) {
        // if some error come on that time code is this by using try and catch block 
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = { userCreate, userLogin, userLogout, getCurrentUser };