const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Training = new Schema(
    {
        category: { type: String, required: true },
        title: { type: String, required: true },
        contentType: {type: String, required: true},
        content: {type: String, required: true},
        questions: { type: [String], required: false }
    },
    { timestamps: true },
);

module.exports = mongoose.model('trainings', Training);