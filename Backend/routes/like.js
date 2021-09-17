const express = require('express');
const router = express.Router();
const likeCtrl = require('../controllers/like');

router.post('/',likeCtrl.likeDislikePost);

module.exports = router;