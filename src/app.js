const express = require('express');
const cors = require('cors');
const { userRoutes } = require('./routes');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use('/user', userRoutes)

module.exports = app;
