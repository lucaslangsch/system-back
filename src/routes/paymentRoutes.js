const route = require('express').Router();
const { authMiddleware } = require('../middlewares')
const { paymentController } = require('../controllers');

route.post('/process_payment', authMiddleware, paymentController.processPayment);

module.exports = route;