const fs = require('fs');

const textInput = fs.readFileSync('./../../1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textInput);

const textOutput = `This is what we know about the avocado: \n${textInput}\n
Created on ${Date.now()}\n`;

// write to a file (synchronous method)
fs.writeFileSync('./../../1-node-farm/starter/txt/output.txt', textOutput);
console.log('File output.txt written.');

// Read/write to a file (asynchronous method)
fs.readFile(
    './../../1-node-farm/starter/txt/start.txt',
    'utf-8',
    (err, data) => {
       console.log(data);
    });

console.log('File is being read');
