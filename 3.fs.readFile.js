const fs = require('node:fs');

console.log('leyendo el 1er archivo........');
const text = fs.readFileSync('./archivo.txt', 'utf-8');

console.log(text)

console.log('leyendo el 2do archivo........');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');

console.log(secondText)