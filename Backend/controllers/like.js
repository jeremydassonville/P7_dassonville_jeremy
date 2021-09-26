const Like = require('../models/Like');
const Post = require('../models/Post');
const utils = require('../utils/jwtUtils');

exports.likeDislikePost = (req,res) => {

const id = utils.getUserId(req.headers.authorization)
const postId = req.body.postId;

console.log(postId);

Like.findOne({
    where: {
        userId: id,
        postId: postId,
    }
})
.then(likeFind => {
    if(likeFind){
        Like.destroy({
            where: {
                userId: id,
                postId: postId,
            }
        })
        .then(() => {
            Post.decrement('nbrLike', {
                where: {id: postId}
            })
            .then(res.status(200).json('like retiré !'))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
    } else {
        Like.create({
            postId: req.body.postId,
            userId: id
        })
        .then(() => {
            Post.increment('nbrLike', {
                where: {id: req.body.postId}
            })
            .then(res.status(200).json('post liké !'))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
    }
})
.catch(error => res.status(400).json({ error }))
}

exports.getNbrLike = (req,res) => {

    const postId = req.query.postId
    
    Post.findOne({
        where: {id : postId},
        attributes: ['nbrLike']
    })
    .then(nbrFind => {
        res.status(200).json(nbrFind);
    })
    .catch(error => res.status(400).json({ error }))

}