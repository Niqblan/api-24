const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
  getUserDetails,
  updateUserLists,
  deleteUser,
  checkEmailExists,
} = require("../controllers/userController");

router.get("/", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUserDetails);
router.put("/:id", updateUserLists);
router.post("/checkEmail", checkEmailExists);
router.delete("/:id", deleteUser);

module.exports = router;
