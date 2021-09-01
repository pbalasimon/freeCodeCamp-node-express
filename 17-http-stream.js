const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    const fileStream = fs.createReadStream('./folder/bigFile.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe();
    });
    fileStream.on('error', (error) => {
        res.end(error);
    });

}).listen(5000);