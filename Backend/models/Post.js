const  Sequelize  = require("sequelize");
const sequelize = require("../utils/database");
const Comment = require("../models/Comment")


const Post = sequelize.define("Post", {
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    attachement: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nbrComment: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    nbrLike: {
        type: Sequelize.INTEGER,
        defaultValue: '0',
    }
});

Comment.belongsTo(Post);


module.exports = Post;
