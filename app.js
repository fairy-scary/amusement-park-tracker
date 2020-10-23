const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(routes);

app.use((req, res, next) => {
    const err = new Error("The requests page couldn't be found.");
    err.status = 404;
    next(err);
});




module.exports = app;
