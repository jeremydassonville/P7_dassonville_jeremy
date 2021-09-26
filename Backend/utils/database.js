const { Sequelize } = require('sequelize');
const config = require('../config/config.json')


const sequelize = new Sequelize('groupomania_OC', config.username, config.password, {
    host: 'localhost',
    dialect: 'mysql',
  });

sequelize.authenticate()
  .then(() => console.log('connexion réussi...'))
  .catch(() => console.log('connexion échouée...'));

module.exports = sequelize;