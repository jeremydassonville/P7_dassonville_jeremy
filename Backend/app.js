const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post.js')

const app = express();

app.use(cors());

 app.use('/api/user', userRoutes);
 app.use('/api/post', postRoutes);


module.exports = app;