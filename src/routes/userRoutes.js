const route = require('express').Router();
const { authMiddleware } = require('../middlewares')
const { userController } = require('../controllers');

// route.get('/show',  userController.showUsers);
route.get('/getUser', authMiddleware, userController.getUser);
route.post('/login', userController.login)
route.post('/register', userController.createUser);

module.exports = route;
