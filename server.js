const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

const pages = [ { route: '/', title: 'Home', content: 'Welcome to the homepage!' }, { route: '/about', title: 'About', content: 'Learn more about us.' }, { route: '/contact', title: 'Contact', content: 'Get in touch with us.' } ];
app.get('/', (req, res) => {
    const home = {
       route: '/', 
       title: 'Home', 
       content: 'Welcome to the homepage!' 
    }
    res.render('home', home);

});

app.get('/contact', (req, res) => {
    const contact = {
        route: '/contact', 
        title: 'Contact', 
        content: 'Get in touch with us.'
    }
    res.render('contact', contact);
})

app.get('/about', (req, res) => {
    const about = {
        route: '/about', 
        title: 'About', 
        content: 'Learn more about us.'
    }
    res.render('about', about);
})



app.listen(port,() => {
    console.log('m runing on port' , port);
});