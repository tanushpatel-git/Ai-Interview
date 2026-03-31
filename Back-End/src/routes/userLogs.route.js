const express = require("express");
const {userCreate, userLogin, userLogout, getCurrentUser} = require("../controllers/user.controller")
const router = express.Router();
const authCheck = require("../middlewares/authCheck");



router.post("/create", userCreate )
router.post("/login", userLogin)
router.get("/logout", userLogout)
router.get("/current-user", authCheck, getCurrentUser)

module.exports = router;