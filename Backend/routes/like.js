const express = require('express');
const router = express.Router();
const likeCtrl = require('../controllers/like');
const auth = require('../middleware/auth');

router.post('/', auth, likeCtrl.likeDislikePost);
router.get('/:id', likeCtrl.getNbrLike)

module.exports = router;