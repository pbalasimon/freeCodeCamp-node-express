const fs = require('fs');

for (let i = 0; i < 100000; i++) {
    fs.writeFileSync('./folder/bigFile.txt', `Hello ${i} \n`, {flag: 'a'});
}
