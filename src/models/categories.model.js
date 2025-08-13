const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('categories', categorySchema);

module.exports = { Category };