const express = require('express');
const cors = require('cors');
const { userRoutes, planRoutes } = require('./routes');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use('/user', userRoutes)
app.use('/plans', planRoutes)

module.exports = app;
