const Puzzle = require('../schemas/puzzle');
const User = require('../schemas/user');

async function getPuzzles(req, res, next) {
    try {
        const topicId = Number(req.params.topicId);
        const puzzles = await Puzzle.find({ topicId: topicId }).select("-correctIndex");
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
    catch(err) {
        next(err);
    }
}

async function postGameResult(req, res, next) {
    try {
        const { userGuesses, topicId } = req.body;
        const puzzleIds = userGuesses.map((guess) => guess.puzzleId);
        const puzzles = await Puzzle.find({_id: {$in: puzzleIds}});
        let score = 0;
        const gameResult = userGuesses.map((guess) => {
            const actualPuzzle = puzzles.find((puzzle) => {
                return guess.puzzleId === puzzle._id.toString();
            });
            let isWin = false;
            if(actualPuzzle.correctIndex === guess.guessIndex) {
                score++;
                isWin = true;
            }
            return {
                question: actualPuzzle.question,
                answers: actualPuzzle.answers,
                correctIndex: actualPuzzle.correctIndex,
                userGuess: guess.guessIndex,
                isWin: isWin
            };
        });
        const user = await User.findOne({email: req.user.email}).populate('achievements.achieId');
        user.allStars += score;
        const newResult = {
            score: score,
            date: new Date()
        };
        if(user.lastResults.length === 5) {
            user.lastResults.pop();
        }
        user.lastResults.unshift(newResult);

        const gameOverview = {
            lastStars: user.lastResults,
            topicId: topicId,
            score: score,
            allStars: user.allStars
        };
        let hasNewAchie = false;
        user.achievements.forEach((achie) => {
            if(!achie.isUnlocked) {
                const achieEval = new Function('gameOverview', `return ${achie.achieId.condition};`);
                const isUnlockedAchie = achieEval(gameOverview);
                if(isUnlockedAchie) {
                    achie.isUnlocked = true;
                    hasNewAchie = true;
                }
            }
        });
        await user.save();
        res.send({gameResult, score, hasNewAchie});
    }
    catch(err) {
        next(err);
    }
}

module.exports = {getPuzzles, postGameResult};