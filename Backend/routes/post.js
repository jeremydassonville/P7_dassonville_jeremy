const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');


//Routage

router.post("/", auth, multer, postCtrl.create);
router.get("/", auth, postCtrl.getAllPost);
router.put("/", auth, multer, postCtrl.modifyPost);
router.delete("/", auth, postCtrl.deletePost);
router.get("/:id", auth, postCtrl.getOnePost);

module.exports = router;