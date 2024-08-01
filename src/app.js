const express = require('express');
const cors = require('cors');

const { userController } = require('./controllers')

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.post('/auth', userController.login);
app.post('/users', userController.create);
app.get('/users', userController.show);

module.exports = app;
