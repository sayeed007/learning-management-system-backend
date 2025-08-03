const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/users.model');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).send({ message: 'User not found' });
        };

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid password' });
        };

        const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email, role: existingUser.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).send({
            message: 'Login successful',
            token,
            user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email
            }
        });

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

module.exports = { loginRouter: router };