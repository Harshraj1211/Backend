// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using 
// http core module (C)

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url === '/about') {
        const filePath = path.join(__dirname, 'about.txt');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading about file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });

    } else if (req.url === '/contact') {
        const filePath = path.join(__dirname, 'contact.txt');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading contact file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data);
            }
        });

    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome! Use /about or /contact');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
