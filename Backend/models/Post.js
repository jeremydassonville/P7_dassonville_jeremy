const  Sequelize  = require("sequelize");
const sequelize = require("../utils/database");

const Post = sequelize.define("Post", {
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    attachement: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Post;