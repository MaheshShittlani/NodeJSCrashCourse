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
    const blogs = [
        {title : 'Beginning Node JS', snippet: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},
        {title : 'Installation Node JS', snippet: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},
        {title : 'Node JS Event Model', snippet: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'},
    ];
    response.render('index' , {title : 'Idiotdiary', blogs});
});

app.get('/about', (request,response) => {
    response.render('about',{title: 'About Idiotdiary'});
});

app.get('/blog/create', (request,response) => {
    response.render('blog/create',{ title: 'Create Blog Post' });
});

app.get('/about-us', (request,response) => {
    response.redirect('/about');
});

app.use((request, response) => {
    response.render('404',{title : 'Page Not found'});
});

