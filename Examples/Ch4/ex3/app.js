const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type','text/html');

    let path = './views/';

    switch (request.url) {
        case '/':
            path += "index.html";
            response.statusCode = 200;
            break;
        case '/about':
            path += "about.html";
            response.statusCode = 200;
            break;
        case '/about-us':
            response.statusCode = 301;
            response.setHeader("Location","/about");
            response.end();
            break;
        default:
            path += "404.html";
            response.statusCode = 404;
            break;
    }

    fs.readFile(path,(err,data) => {
        if(err) {
            throw new Error(err);
        }

        response.write(data);
        response.end();
    });
});

server.listen(3000,() => {
    console.log("Requests received on port 3000");
});