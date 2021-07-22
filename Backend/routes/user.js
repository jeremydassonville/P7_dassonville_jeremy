const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//Routage

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/me", userCtrl.userAccount);

module.exports = router;