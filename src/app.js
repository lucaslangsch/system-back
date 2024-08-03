const express = require('express');
const cors = require('cors');

const { userController } = require('./controllers');

const { authMiddleware } = require('./middlewares');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

// app.post('/auth', userController.auth);
// app.post('/users', userController.create);
// app.use(authMiddleware);
app.get('/users', userController.show);

module.exports = app;
