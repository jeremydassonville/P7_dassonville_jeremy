const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment');

router.post("/", commentCtrl.createPost);

module.exports = router;