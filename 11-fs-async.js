const fs = require('fs');

fs.readFile('./folder/first.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error);
        return
    }
    const first = result;
    fs.readFile('./folder/second.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
            return
        }
    });
    const second = result;
    fs.writeFile('./folder/result-async.txt',
        `Here is the result: ${first}, ${second}`,
        (error, result) => {
            if (error) {
                console.log(error);
                return
            }
            console.log(result);
        });
});