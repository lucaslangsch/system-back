const express = require('express');
const cors = require('cors');
const { userRoutes, planRoutes, paymentRoutes } = require('./routes');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use('/user', userRoutes);
app.use('/plans', planRoutes);
app.use('/payment', paymentRoutes);

module.exports = app;
