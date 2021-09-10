const  Sequelize  = require("sequelize");
const sequelize = require("../utils/database");


const Comment = sequelize.define("Comment", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    auteur: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: null,
    },
});

module.exports = Comment;