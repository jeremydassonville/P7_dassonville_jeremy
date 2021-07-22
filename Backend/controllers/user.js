const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
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
            user.save()
                .then(() => res.status(201).json({message: 'Utilisateur crée !' }))
                .catch(error => res.status(400).json({ error }));
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
                        'Secret_Token',
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
    console.log(id);
    User.findOne({
        attributes: ['id', 'email', 'name', 'surname', 'isAdmin'],
        where: { id: id }
    })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(500).json(error))
};