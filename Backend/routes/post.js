const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config');


//Routage

router.post("/create", multer, postCtrl.create);
router.get("/", postCtrl.getAllPost);

module.exports = router;