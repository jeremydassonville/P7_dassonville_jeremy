const Like = require('../models/Like');
const Post = require('../models/Post');
const utils = require('../utils/jwtUtils');

exports.likeDislikePost = (req,res) => {

const id = utils.getUserId(req.headers.authorization)

Like.create({
    postId: req.body.postId,
    userId: req.body.userId
})
.then(() => {
    Post.increment('nbrLike', {
        where: {id: req.body.postId}
    })
    .then(res.status(200).json('post liké !'))
    .catch(error => console.log(error))
})
.catch(error => console.log(error));


}