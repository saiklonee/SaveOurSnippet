const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/sync-user", userController.syncUser);

module.exports = router;
