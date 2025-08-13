const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const router = express.Router();

router.get('/register', (req, res) => {
    res.send('register route');
});

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: 'User already exist' });
        };

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = new User({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();
        return res.status(201).send({
            message: 'User registered successfully',
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});

module.exports = { registerRouter: router };