const express = require('express');
const { Category } = require('../models');

const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(201).send(categories);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});

module.exports = { categoryRouter: router };