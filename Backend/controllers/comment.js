let Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");
let utils = require('../utils/jwtUtils');

exports.createComment = (req,res) => {

    let id = utils.getUserId(req.headers.authorization)

    User.findOne({
        attributes: ['name', 'surname'],
        where: {id: id}
    })
    .then(user => {
        
        const userComment = user.name + ' ' + user.surname
        
        Comment.create({
            auteur: userComment,
            content: req.body.content,
            PostId: req.body.postId,
        })
    })
    .catch(error => res.status(500).json(error));
}

exports.getAllComments = (req,res) => {

    let id = req.query.id;

    Comment.findAll({
        attributes: ['auteur', 'content', 'createdAt'],
        where: {PostId: id},
        order: [['createdAt', 'DESC']]
    })
    .then(comments => {
        console.count(comments)
        if (comments.length > null) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({error: 'Pas de commentaire à afficher'});
        }
    })
    .catch(error => res.status(500).json(error));
}