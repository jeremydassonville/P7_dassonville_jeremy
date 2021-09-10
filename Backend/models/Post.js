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
});

Comment.belongsTo(Post);

module.exports = Post;
