const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const checkPassword = require('../middleware/checkPassword');

//Routage

router.post("/signup", checkPassword, userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/me", userCtrl.userAccount);
router.put("/", userCtrl.modifyAccount);
router.delete("/", userCtrl.deleteUserAccount);

module.exports = router;