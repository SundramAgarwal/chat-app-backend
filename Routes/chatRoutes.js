const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../Controllers/chatControllers");

const router = express.Router();

router.post("/", protect, accessChat);
router.get("/", protect, fetchChats);
router.post("/group", protect, createGroupChat);
router.put("/renamethegroup", protect, renameGroup);
router.put("/removefromgroup", protect, removeFromGroup);
router.put("/addtogroup", protect, addToGroup);

module.exports = router;
