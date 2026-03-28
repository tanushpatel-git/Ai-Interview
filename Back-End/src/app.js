const express = require('express')
const app = express()
const userLogs = require("./routes/userLogs.route")
const cors = require("cors")

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// router level middle ware
app.use("/logs", userLogs)


module.exports = app