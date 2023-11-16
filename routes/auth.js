const express = require("express");
const authController = require("../controller/auth");

const router = express.Router();

router.post('/register', authController.register)
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/juice', authController.juice);
module.exports = router;