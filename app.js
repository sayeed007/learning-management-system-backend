const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('project is running');
});

module.exports = app;