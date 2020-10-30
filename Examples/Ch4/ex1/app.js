const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.method);
    console.log(request.url);

    // Set header content type

    response.setHeader('Content-Type','text/html');

    response.write('<html>');
    
    response.write('<head><title>Creating Node Js Http Server</title></head>');

    response.write('<body>Welcome in the world of Node JS</body>');
    
    response.write('</html>');

    response.end();
});

server.listen(3000,() => {
    console.log("Requests received on port 3000");
});