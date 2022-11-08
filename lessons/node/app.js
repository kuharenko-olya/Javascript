const http = require('http');
const url = require("url");

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url).pathname
    if (reqUrl === "/") {
        res.write("Hello nodejs")
        res.end()
    } else if (reqUrl === "/users") {
        res.write(JSON.stringify(['Kate', 'Sasha']))
        res.end()
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});