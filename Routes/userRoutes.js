const express = require("express");
const {
  registerUser,
  authUser,
  //   logout,
  //   getUser,
} = require("../Controllers/userControllers");
// const protect = require("../middleWare/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
// router.get("/getuser", protect, getUser);

module.exports = router;
