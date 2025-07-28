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
    (err, data1) => {
        fs.readFile(
            `./../../1-node-farm/starter/txt/${data1}.txt`,
            'utf-8',
            (err, data2) => {
                fs.readFile(
                    `./../../1-node-farm/starter/txt/append.txt`,
                    'utf-8',
                    (err, data3) => {
                        console.log(data3);

                        fs.writeFile(
                            './../../1-node-farm/starter/txt/final.txt',
                            `${data2}\n\n__________\n\n${data3}`,
                            'utf-8',
                                err => {
                                console.log('File has been written. \\o/');
                        })
                    });
            });
    });

console.log('File is being read');
