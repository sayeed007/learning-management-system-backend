const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseCategory: {
        type: String,
        required: true
    },
    courseDescription: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: String,
        require: true
    },
    hasPublished: {
        type: Boolean,
        default: false
    }

});

const Course = mongoose.model('courses', courseSchema);

module.exports = { Course };