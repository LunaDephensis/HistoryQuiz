var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

require('dotenv').config()


var indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const puzzlesRouter = require('./routes/puzzles');
const authRouter = require('./routes/auth');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    credentials: true,
    origin: [process.env.CORS_ORIGIN],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use('/', indexRouter);
app.use(userRouter);
app.use(puzzlesRouter);
app.use(authRouter);

module.exports = app;
