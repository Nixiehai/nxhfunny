// const http = require('http');

// http.createServer((req, res) => {
//     res.write('hello nodejs');
//     res.end();
// }).listen(8080);

// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(8081); //the server object listens on port 8080

const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=UTF-8'
    });
    res.write('<p>Hello World!</p><span>hello nodejs</span>');
    res.write(`hello nodejs`);
    // res.write(req.url);
    res.end();
}).listen(8080);

// console.warn(`请前往:localhost:8080`);
console.log(`请前往:localhost:8080`);