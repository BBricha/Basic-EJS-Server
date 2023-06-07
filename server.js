const express = require('express');
const axios = require('axios');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

const pages = [ { route: '/', title: 'Home', content: 'Welcome to the homepage!' }, { route: '/about', title: 'About', content: 'Learn more about us.' }, { route: '/contact', title: 'Contact', content: 'Get in touch with us.' } ];
app.get(`${pages[0].route}`, (req, res) => {
    const home = pages[0]
    res.render('home', home);

});

app.get(`${pages[2].route}`, (req, res) => {
    const contact = pages[2]
    res.render('contact', contact);
})

app.get(`${pages[1].route}`, (req, res) => {
    const about =pages[1]
    res.render('about', about);
})



app.listen(port,() => {
    console.log('m runing on port' , port);
});