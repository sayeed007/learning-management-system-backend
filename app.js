const express = require('express');
const { registerRouter } = require('./routes/register.route');
const { loginRouter } = require('./routes/login.route');
const { categoryRouter } = require('./routes/category.route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('project is running');
});

app.use(registerRouter);
app.use(loginRouter);
app.use(categoryRouter);

module.exports = app;