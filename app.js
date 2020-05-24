const express = require('express');
const path = require('path');

const app = express();

const homeRoute = require('./routes/home-routes')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoute);

app.listen(3000);