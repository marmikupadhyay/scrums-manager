const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/:id", UserController.getUserDetails);
module.exports = router;
