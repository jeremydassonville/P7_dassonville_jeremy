const { Sequelize } = require('sequelize');
const config = require('../config/config.json')


const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: 'localhost',
    dialect: 'mysql',
  });

sequelize.authenticate()
  .then(() => console.log('connexion réussi...'))
  .catch(() => console.log('connexion échouée...'));

module.exports = sequelize;