const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const path = require('path');

const sequelize = require('./utils/database');

sequelize.sync();

const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');


const app = express();

app.use(bodyparser.json());

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);



module.exports = app;