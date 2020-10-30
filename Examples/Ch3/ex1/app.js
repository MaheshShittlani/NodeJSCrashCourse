const http = require('http')

const server = http.createServer((request,response) => {
    console.log("Request receive with http method - "+ request.method);
});

server.listen(3000, () => {
    console.log("Starts listing your request on port 3000");
});
