const express = require('express');
const { Course } = require('../models');

const router = express.Router();

router.get('/courses', async (req, res) => {
    try {
        const allCourses = await Course.find();
        res.send(allCourses);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});

router.post('/create-course', async (req, res) => {
    try {
        const { courseName, courseCategory, courseDescription, difficultyLevel } = req.body;
        const newCourse = new Course({ courseName, courseCategory, courseDescription, difficultyLevel });
        const savedCourse = await newCourse.save();

        return res.status(201).send(savedCourse);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
});

module.exports = { courseRouter: router };