let Post = require('../models/Post');
let User = require('../models/User');
let Comment = require('../models/Comment');
let utils = require('../utils/jwtUtils');
const fs = require('fs');


exports.create = (req,res) => {

    let id = utils.getUserId(req.headers.authorization)

    User.findOne({
        attributes: ['id', 'email', 'name', 'surname'],
        where: {id: id}
    })
    .then(user => {
        let content = {
            content: req.body.content,
            attachement: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        };
        Post.create({
            content: content.content,
            attachement: content.attachement,
            UserId: user.id
        })
        .then((newPost) => {
            res.status(201).json(newPost)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    })
    .catch(error => res.status(500).json(error));
}

exports.getAllPost = (req, res) => {
    Post.findAll({
        include: [{
            model: User,
            attributes: ['name', 'surname', 'id']
        }],
        order: [['createdAt', 'DESC']]
    })
        .then(posts => {
            if (posts.length > null) {
                res.status(200).json(posts)
                console.log(posts)
            } else {
                res.status(404).json({ error: 'Pas de post à afficher' })
            }
        })
        .catch(error => res.status(500).json(error));
}

exports.getOnePost = (req, res) => {
    let id = req.query.id;
    Post.findOne({
        attributes: ['content','attachement', 'UserId', 'id', 'nbrLike'],
        where: {id: id}
    })
    .then(postFind => {
        User.findOne({
            attributes: ['name', 'surname', 'id'],
            where: {id: postFind.UserId}
        })
        .then(User => {
            let postComplet = {
                User,
                attachement: postFind.attachement,
                content: postFind.content,
                id: postFind.id,
                nbrLike: postFind.nbrLike,
            }
            res.status(200).json(postComplet);
        })
        .catch(error => res.status(500).json(error));
        
    }) 
    .catch(error => res.status(500).json(error));

}

exports.modifyPost = (req, res) => {


    let userId = req.body.userId;
    let postId = req.body.postId;

    let id = utils.getUserId(req.headers.authorization);
    
    User.findOne({
        attributes: ['id', 'email', 'name', 'surname', 'isAdmin'],
        where: { id: id}
    })
    .then(user => {
        if (user && user.id == userId){
            if(req.file){
                Post.update(
                    {
                        content: req.body.content,
                        attachement: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                    },
                    {
                        where: { id: postId}
                    }
                )
                .then((newPost) => {
                    res.status(200).json(newPost)
                })
                .catch(error => console.log(error))
            } else {
                Post.update({
                    content: req.body.content,
                },
                {
                    where: { id: postId}
                }
            )
            .then((newPost) => {
                res.status(200).json(newPost)
            })
            .catch(error => res.status(500).json(error))
            }
            
        }
        else {
            res.status(401).json({error: 'Utilisateur non autorisé à modifier le post !'})
        }
    })
    .catch(error => res.status(500).json(error));
};

exports.deletePost = (req, res) => {
    let userOder = req.body.userIdOrder;

    let id = utils.getUserId(req.headers.authorization)
    User.findOne({
        attributes: ['id', 'email', 'name', 'surname', 'isAdmin'],
        where: { id: id }
    })
    .then(user => {       
        console.log(user)
        Post.findOne({
           where: { id: req.body.postId }
        })
        .then((postFind) => {
            console.log(postFind)
            console.log(id);
            if(id == postFind.UserId || user.isAdmin == true){
                const filename = postFind.attachement.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.destroy({
                        where: { id: postFind.id }
                        })
                        .then(() => res.end())
                        .catch(err => res.status(500).json(err))
                })
            } else {
                res.status(403).json('Utilisateur non autorisé à supprimer ce post');
            }       
        })
        .catch(err => res.status(500).json(err))
    })
    .catch()
}