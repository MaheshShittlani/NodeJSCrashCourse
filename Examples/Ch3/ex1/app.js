const http = require('http')

const server = http.createServer((request,response) => {
    console.log(request.method);
});

server.listen(3000, () => {
    console.log("Starts listing your request on port 3000");
});