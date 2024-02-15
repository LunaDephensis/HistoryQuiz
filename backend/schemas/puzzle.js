const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const puzzleSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: [
        {
            type: String,
            required: true
        }
    ],
    correctIndex: {
        type: Number,
        required: true
    },
    topicId: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Puzzle', puzzleSchema, 'puzzle');