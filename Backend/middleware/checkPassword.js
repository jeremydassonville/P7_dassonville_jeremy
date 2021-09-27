const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: "Mot de passe requis : 8 caractères minimun. Au moins 1 Majuscule, 1 minuscule, 2 chiffres, sans espaces" });
    } else {
        next();
    }
};