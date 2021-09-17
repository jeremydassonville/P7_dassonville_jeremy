const  Sequelize  = require("sequelize");
const sequelize = require("../utils/database");

const Like = sequelize.define("Like", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: null,
    }
});



module.exports = Like;