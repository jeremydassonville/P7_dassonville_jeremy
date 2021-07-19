const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('groupomania_OC', 'jeremy', 'FTKN84N3T4', {
    host: 'localhost',
    dialect: 'mysql',
  });

sequelize.authenticate()
  .then(() => console.log('connexion réussi...'))
  .catch(() => console.log('connexion échouée...'));

module.exports = sequelize;