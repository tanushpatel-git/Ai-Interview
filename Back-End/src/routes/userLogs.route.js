const express = require("express");
const {googleAuth, logout} = require("../controllers/auth.controller");
const router = express.Router();



router.post("/login", googleAuth)
router.get("logout", logout)


module.exports = router;