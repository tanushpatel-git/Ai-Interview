const express = require("express");
const {userCreate, userLogin, userLogout, getCurrentUser} = require("../controllers/user.controller")
const router = express.Router();



router.post("/create", userCreate )
router.post("/login", userLogin)
router.get("/logout", userLogout)
router.get("/current-user", getCurrentUser)


module.exports = router;