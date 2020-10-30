const { request, response } = require('express');
const express = require('express');

const app = express();

app.listen(3000,'localhost',() => {
    console.log("Listening request on port 3000");
});

app.get('/', (request,response) => {
    // response.send('<p>Welcome to express.</p>');

    response.sendFile('./views/index.html',{root:__dirname});
});

app.get('/about', (request,response) => {
    response.sendFile('./views/about.html',{root:__dirname});
});

app.get('/about-us', (request,response) => {
    response.redirect('/about');
});

app.use((request, response) => {
    response.sendFile('./views/404.html',{root: __dirname});
});

