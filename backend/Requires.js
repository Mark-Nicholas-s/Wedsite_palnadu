const express = require('express');
const app = express();
const userRouter = require('./Routes/user');
const fglRouter = require('./Routes/FGL');
const bodyparser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/user',userRouter);
app.use('/',fglRouter)
module.exports = app;
