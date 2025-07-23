const express = require('express');
const { registerRouter } = require('./routes/register.route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('project is running');
});

app.use(registerRouter);

module.exports = app;