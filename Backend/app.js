const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const sequelize = require('./utils/database');

sequelize.sync();

const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post.js')

const app = express();

app.use(bodyparser.json());

app.use(cors());

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


module.exports = app;