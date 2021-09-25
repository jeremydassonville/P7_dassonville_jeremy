let Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");
let utils = require('../utils/jwtUtils');

exports.createComment = (req,res) => {

    console.log(req);

    let id = utils.getUserId(req.headers.authorization)

    User.findOne({
        attributes: ['name', 'surname', 'id'],
        where: {id: id}
    })
    .then(user => {
        const userComment = user.name + ' ' + user.surname
        Comment.create({
            auteur: userComment,
            content: req.body.content,
            PostId: req.body.postId,
            userId: user.id,
        })
        .then(res.status(201).end())
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json(error));
}

exports.getAllComments = (req,res) => {

    let id = req.query.id;

    Comment.findAll({
        attributes: ['auteur', 'content', 'userId', 'id', 'createdAt'],
        where: {PostId: id},
        order: [['createdAt', 'DESC']]
    })
    .then(comments => {
        if (comments.length > null) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({error: 'Pas de commentaire à afficher'});
        }
    })
    .catch(error => res.status(500).json(error));
}

exports.deleteComment = (req,res) => {

    const id = utils.getUserId(req.headers.authorization)

    User.findOne({
        where: {id: id}
    })
    .then(user => {
        if(user.id == req.query.commentUserId || user.isAdmin == true){
            Comment.destroy({
                where: {id: req.query.commentId}
            })
            .then(() => res.end())
            .catch(error => res.status(500).json(error))
        } else {
            res.status(401).json('utilisateur non authorisé à supprimer !')
        }
    })
    .catch(error => res.status(500).json(error))


}