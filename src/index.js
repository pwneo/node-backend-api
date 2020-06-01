const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/projects',
    {useNewUrlParser: true, useUnifiedTopology: true}
    );
requireDir('./models');

app.route('./routes/Routes');

app.use('/', require('./routes/Routes'));
app.listen('3001', () => {
    console.log('Back-end Started!');
});