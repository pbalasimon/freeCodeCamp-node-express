const path = require('path');

console.log(path.sep);

const filePath = path.join('/folder//', 'subfolder', 'file.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolutePath = path.resolve(__dirname, 'folder', 'subfolder', 'file.txt');

console.log(absolutePath);