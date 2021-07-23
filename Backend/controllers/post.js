let Post = require('../models/Post');
let User = require('../models/User');
let utils = require('../utils/jwtUtils');

exports.create = (req,res) => {
    let id = utils.getUserId(req.headers.authorization)
    User.findOne({
        attributes: ['id', 'email', 'name', 'surname'],
        where: {id: id}
    })
    .then(user => {
        let content = {
            content: req.body.content,
            attachement: req.body.attachement,
        };
        console.log(content);
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
            attributes: ['username']
        }],
        order: [['createdAt', 'DESC']]
    })
        .then(posts => {
            if (post.length > null) {
                res.status(200).json(posts)
            } else {
                res.status(404).json({ error: 'Pas de post à afficher' })
            }
        })
        .catch(error => res.status(500).json(error));
}   