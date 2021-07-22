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

Post.associate = function(models) {
    models.Post.belongsTo(models.User, {
        foreignKey: {
            allowNull: false
        }
    });
};

module.exports = Post;