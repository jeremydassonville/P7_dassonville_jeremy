const express = require('express');
const bodyparser = require('body-parser');

const rateLimit = require('express-rate-limit');
const helmet = require("helmet");
const cors = require('cors');
const sequelize = require('./utils/database');

const path = require('path');

sequelize.sync();

const userRoutes = require('./routes/user.js');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const likeRoutes = require('./routes/like');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000 // limit each IP to 100 requests per windowMs
  });

const app = express();

app.use(limiter);
app.use(helmet());
app.use(bodyparser.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
app.use('/api/like', likeRoutes);



module.exports = app;