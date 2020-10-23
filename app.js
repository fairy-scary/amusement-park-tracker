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

app.use((err, req, res, next) => {
    const isProduction = process.env.NODE_ENV === 'production';
    console.log(err.status);
    console.log(res.status);
    res.status(err.status || 500);
    console.error(err);
    res.render('err', { title: 'Server Error',
                        message: isProduction ? null : err.message,
                        error: isProduction ? null : err });
    next(err);
});


module.exports = app;
