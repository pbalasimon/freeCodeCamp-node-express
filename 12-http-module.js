const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        response.end('Welcome to our home page!');
    }

    if (request.url === '/about') {
        response.end('Here is our short history!');
    }

    response.end(`
   <h1>Oops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">Back home</a>
   `);

});

server.listen(5000);