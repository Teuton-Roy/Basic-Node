const http = require('http');

const port = process.env.PORT || 5000;
// const port = 5000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello Boobs!</h1> <p>Boobs is something that is very interesting</p>');
}); 

server.listen(port, () => {
    console.log("server is running on port ${port}");
});
