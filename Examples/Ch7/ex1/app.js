const { request, response } = require('express');
const express = require('express');

//express app
const app = express();

// Register view engine
app.set('view engine','ejs');

// app.set('view','myviews'); // default views dir is views.

app.listen(3000,'localhost',() => {
    console.log("Listening request on port 3000");
});

app.get('/', (request,response) => {
    response.render('index' , {title : 'Idiotdiary'});
});

app.get('/about', (request,response) => {
    response.render('about',{title: 'About Idiotdiary'});
});

app.get('/blog/create', (request,response) => {
    response.render('blog/create');
});

app.get('/about-us', (request,response) => {
    response.redirect('/about');
});

app.use((request, response) => {
    response.sendFile('./views/404.html',{root: __dirname});
});

