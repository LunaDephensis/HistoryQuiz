const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String
    },
    allStars: {
        type: Number,
        required: true
    },
    lastResults: [
        {
            score: {
                type: Number
            },
            date: {
                type: Date
            }
        }
    ],
    achievements: [
        {
            achieId: {
                type: Schema.Types.ObjectId,
                ref: 'Achievement',
                required: true
            },
            isUnlocked: {
                type: Boolean,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('User', userSchema);