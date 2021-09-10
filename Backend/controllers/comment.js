let Comment = require("../models/Comment");
const User = require("../models/User");
let utils = require('../utils/jwtUtils');

exports.createPost = (req,res) => {

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