const fs = require('node:fs')// a partir de NodeJS, se recomienda poner node;

const status = fs.statSync('./archivo.txt');

console.log(
    status.isFile(), //sis es un fichero
    status.isDirectory(), // si es un directorio
    status.isSymbolicLink(), //si es  un enlace simbolico
    status.size, // tamanio en bytes
)