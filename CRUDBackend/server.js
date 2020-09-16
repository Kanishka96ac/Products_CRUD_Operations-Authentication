require('./config/config');
require('./models/db');

require('./config/passportConfig');

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

const passport = require('passport');

const rtsIndex = require('./routes/index.router');

var app = express()
const mongoose = require('mongoose')

var prductController = require('./controllers/productController');

// const {mongoose} = require('../models/db.js')

// middlewear

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api' , rtsIndex);

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// Start server
app.listen(process.env.PORT, () => console.log(`Server start at port : ${process.env.PORT}`));


app.use('/products', prductController);