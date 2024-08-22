const route = require('express').Router();
const { authMiddleware } = require('../middlewares')
const { planController } = require('../controllers');

route.get('/show', authMiddleware, planController.showPlans);
route.get('/show/:id', planController.showPlan);

module.exports = route;