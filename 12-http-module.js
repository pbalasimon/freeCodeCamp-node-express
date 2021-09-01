const http = require('http');

const server = http.createServer((request, response) => {

    if (request.url === '/') {
        console.log('Home!');
        response.end('Welcome to our home page!');
    }

    if (request.url === '/about') {
        console.log('About!');
        // BLOCKING CODE!!!
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                for (let k = 0; k < 1000; k++) {
                    console.log(`i: ${i} j: ${j} k: ${k}`);
                }
            }
        }
        response.end('Here is our short history!');
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});