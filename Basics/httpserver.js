const http  = require('http');

const port = process.env.PORT;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Boobs!</h1>');

});
server.listen(() => {
    console.log('Server is running on port ${port}');
});