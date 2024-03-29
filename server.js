const PORT = 8080;

/** Imports */
const STATUS = require('./src/utils/httpStatus.js');
const express = require('express');
const app = express();

//middlewares
const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

/** End Imports */

app.use(compression()); //compress all routes - https://www.npmjs.com/package/compression
app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        "script-src": ["'self'","'nonce-pdPtnYIhQcLjAr6'"],
      },
    },
  })); //secure express app by setting HTTP response headers - https://www.npmjs.com/package/helmet
app.use(rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // 100 request per minute per client(window)
  })); //limit number of client request - https://www.npmjs.com/package/express-rate-limit

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