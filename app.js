const STATUS = require('./src/utils/httpStatus.js');
const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static('static'), express.text());

app.post('/', (req, res, next) => {
    const moves = ['rock', 'paper', 'scissors'];

    const gameResult = (move) => {
        //const moveIndex = moves.indexOf(move);
        const randomMove = moves[Math.floor(Math.random() * 3)];

        const tied = `Aww, we tied! I also chose ${randomMove}.`;
        const victory = `Dang it, you won! I chose ${randomMove}.`;
        const defeat = `Ha! You lost. I chose ${randomMove}.`;

        let message = '';

        if (move === randomMove) {
            message = tied;
        } else if (
            (move === 'rock' && randomMove === 'paper') ||
            (move === 'paper' && randomMove === 'scissors') ||
            (move === 'scissors' && randomMove === 'rock')
        ) {
            message = defeat;
        } else {
            message = victory;
        }

        return message;
    };

    if (Object.keys(req.body).length === 0){
        res.status(STATUS.HTTP_400_BAD_REQUEST).contentType('text/plain').send('Invalid request!');
    } else if (moves.indexOf(req.body) === -1){
        res.status(STATUS.HTTP_406_NOT_ACCEPTABLE).contentType('text/plain').send('Invalid move!');
    } else {
        const message = gameResult(req.body);
        res.status(STATUS.HTTP_200_OK).contentType('text/plain').send(message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});