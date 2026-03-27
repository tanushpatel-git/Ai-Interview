const express = require('express')
const connectDb = require("./utility/connectDb");
const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()


module.exports = app