/**
 * Created by bapaydin on 07.03.2017.
 */
'use strict';


const express = require('express');

const PORT = 8080;


const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);