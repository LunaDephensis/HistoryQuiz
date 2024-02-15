const Puzzle = require('../schemas/puzzle');

async function getPuzzles(req, res, next) {
    const topicId = Number(req.params.topicId);
    const puzzles = await Puzzle.find({ topicId: topicId });
    let randomIndexes = [];
    let randomPuzzles = [];
    while(randomIndexes.length < 5) {
        const num = Math.floor(Math.random() * puzzles.length);
        if(!randomIndexes.includes(num)) {
            randomIndexes.push(num);
        }
    }
    randomIndexes.forEach((randomIndex) => {
        randomPuzzles.push(puzzles[randomIndex]);
    });
    res.send(randomPuzzles);
}

module.exports = {getPuzzles};