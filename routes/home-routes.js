const express = require('express');

const route = express.Router();
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
route.get('/', (req, res, next) => {
    res.render('index',{ 
        pageTitle: 'RCOE Events',
        cards: cards
    });
});

route.get('/login', (req, res, next)=> {
    res.render('login', {
        pageTitle: 'login'
    });
});
route.get('/signup', (req, res, next)=> {
    res.render('signup', {
        pageTitle: 'Sign Up'
    });
});
route.post('/manage', (req, res, next)=> {
    res.render('manage', {
        pageTitle: 'Create/Manage'
    });
});
route.get('/create', (req, res, next)=> {
    res.render('create', {
        pageTitle: 'Create Events'
    });
});


module.exports = route;