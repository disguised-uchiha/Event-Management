const express = require('express');
const path = require('path');

const app = express();

const homeRoute = require('./routes/home-routes')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoute);
app.use((req, res, next) => {
    res.status(404);
    res.render('404')
});
app.listen(3000);