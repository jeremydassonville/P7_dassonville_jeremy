const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

//Routage

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/me", userCtrl.userAccount);
router.put("/", userCtrl.modifyAccount);
router.delete("/", userCtrl.deleteUserAccount);

module.exports = router;