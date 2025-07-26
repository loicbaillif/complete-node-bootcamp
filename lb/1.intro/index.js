const fs = require('fs');

const textInput = fs.readFileSync('./../../1-node-farm/starter/txt/input.txt', 'utf-8');
console.log(textInput);

const textOutput = `This is what we know about the avocado: \n${textInput}\n
Created on ${Date.now()}\n`;

// write to a file
fs.writeFileSync('./../../1-node-farm/starter/txt/output.txt', textOutput);
console.log('File output.txt written.');
