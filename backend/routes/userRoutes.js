const express = require("express");
const { registerUser,authUser,allUser } =require("../controllers/userControllers")
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser).get(protect,allUser);
router.post("/login", authUser);

module.exports = router;