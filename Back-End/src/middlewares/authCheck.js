const express = require("express");
const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        const {userId} = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = userId;
        next();
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = authCheck;