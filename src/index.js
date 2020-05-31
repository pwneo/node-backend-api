const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.route('./routes/Routes');
app.listen('3001', () => {
    console.log('Back-end Started!');
});