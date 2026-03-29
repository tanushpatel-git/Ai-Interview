const express = require('express')
const app = express()
const userLogs = require("./routes/userLogs.route")
const cors = require("cors")
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

// router level middle ware
app.use("/user", userLogs)


module.exports = app