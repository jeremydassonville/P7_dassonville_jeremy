const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const emailValidator = require('email-validator');
const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
let utils = require('../utils/jwtUtils.js');


exports.signup = (req, res) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User ({
                email: req.body.email,
                name: req.body.name,
                surname: req.body.surname,
                password: hash,
                isAdmin : false,
            });
            if(!emailValidator.validate(user.email)){
                res.status(400).json({message: 'adresse email invalide !'})
            } else {
                user.save()
                .then(() => res.status(201).json({message: 'Utilisateur crée !' }))
                .catch(error => res.status(400).json({ error }));
            } 
        })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req,res) => {
    User.findOne({
        where: { email: req.body.email }
    })
    .then(user => {
        if (!user){
            return res.status(401).json({ error: 'Utilisateur non trouvé !'});
        }
        bcrypt.compare(req.body.password, user.password)
            .then(valid =>{
                if (!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect !'});
                }
                res.status(200).json({
                    userId: user.id,
                    token: jwt.sign(
                        {userId: user.id},
                        'test',
                        { expiresIn: '24h'}
                    )
                });
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.userAccount = (req, res) => {
    let id = utils.getUserId(req.headers.authorization)
    User.findOne({
        attributes: ['id', 'email', 'name', 'surname', 'isAdmin'],
        where: { id: id }
    })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(500).json(error))
};

exports.modifyAccount = (req,res) => {
    let id = utils.getUserId(req.headers.authorization);
    User.findOne({
        attributes: ['id', 'email', 'name', 'surname'],
        where: {id: id}
    })
    .then(() => {
        User.update(
            {
            email: req.body.userEmail,
            surname: req.body.userSurname,
            name: req.body.userName,
            },
            {
                where: { id: id}
            }
        )
        .then(newUserInfos => {
            res.status(200).json(newUserInfos)
        })
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(400).json({ error }))
};

exports.deleteUserAccount = (req,res) => {
    let id = utils.getUserId(req.headers.authorization);
    User.findOne({
        attributes: ['id'],
        where: {id: id}
    })
    .then(() => {
        Post.destroy({
            where: {userId: id}
        })
        .then(() => {
            Comment.destroy({
                where: {userId: id}
            })
            .then(() => {
                User.destroy({
                    where: {id: id}
                })
                .then(() => res.status(200).json({message: 'Compte supprimé !'}))
                .catch(error => res.status(400).json({ error }))
            })
            .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(400).json({ error }))
}