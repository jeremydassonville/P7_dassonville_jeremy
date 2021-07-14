

exports.signup = (req, res) => {
    res.status(201).json({message: 'Utilisateur crée !'});
};

exports.login = (req,res) => {
    res.status(200).json({message: 'Connecté !'})
}