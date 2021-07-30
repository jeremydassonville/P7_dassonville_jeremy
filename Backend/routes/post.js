const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config');


//Routage

router.post("/", multer, postCtrl.create);
router.get("/", postCtrl.getAllPost);
router.delete("/", postCtrl.deletePost);
router.get("/:id", postCtrl.getOnePost);

module.exports = router;