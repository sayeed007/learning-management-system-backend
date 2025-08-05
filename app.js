const express = require('express');
const { loginRouter, registerRouter, categoryRouter, courseRouter } = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('project is running');
});

app.use(registerRouter);
app.use(loginRouter);
app.use(categoryRouter);
app.use(courseRouter);

module.exports = app;