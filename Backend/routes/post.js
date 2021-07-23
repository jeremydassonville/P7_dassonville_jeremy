const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

//Routage

router.post("/create", postCtrl.create);
router.get("/", postCtrl.getAllPost);

module.exports = router;