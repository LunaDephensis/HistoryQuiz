const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const achievementSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Achievement', achievementSchema);