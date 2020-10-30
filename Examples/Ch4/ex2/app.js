const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type','text/html');

    fs.readFile('./views/index.html',(error,data) => {
        if(error) {
            throw Error(err);
        }

        response.write(data);
        response.end();
    })


});

server.listen(3000,() => {
    console.log("Requests received on port 3000");
});