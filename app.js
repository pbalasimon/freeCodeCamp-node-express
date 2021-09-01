const { createReadStream } = require('fs');

const stream = createReadStream('./folder/bigFile.txt',
    {
        encoding: 'utf-8'
    });

stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (error) => {
    console.log(error);
})