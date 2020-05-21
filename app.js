const express = require('express');
const path = require('path');

const app = express();
// creating a local card array for lorem purpose

const cards = [{
    cardImage: '/images/1.jpg',  
},
{
    cardImage: '/images/1.jpg',  
},
{
    cardImage: '/images/1.jpg',  
},
{
    cardImage: '/images/1.jpg',  
}]
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index',{ 
        pageTitle: 'RCOE Events',
        cards: cards
    });
});

app.get('/login', (req, res, next)=> {
    res.render('login', {
        pageTitle: 'login'
    });
});
app.get('/signup', (req, res, next)=> {
    res.render('signup', {
        pageTitle: 'Sign Up'
    });
});
app.get('/manage', (req, res, next)=> {
    res.render('manage', {
        pageTitle: 'Create/Manage'
    });
});
app.get('/create', (req, res, next)=> {
    res.render('create', {
        pageTitle: 'Create Events'
    });
});
app.listen(3000);