const STATUS = require('./src/utils/httpStatus.js');
const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static('static'), express.text());

app.post('/', (req, res, next) => {
    const moves = ['rock', 'paper', 'scissors'];
    if (Object.keys(req.body).length === 0){
        res.status(STATUS.HTTP_400_BAD_REQUEST).contentType('text/plain').send('Invalid request!');
    } else if (moves.indexOf(req.body) === -1){
        res.status(STATUS.HTTP_406_NOT_ACCEPTABLE).contentType('text/plain').send('Invalid move!');
    } else {
        res.status(STATUS.HTTP_200_OK).contentType('text/plain').send(`Your move: ${req.body}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});