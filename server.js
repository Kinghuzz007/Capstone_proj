const http = require('http');

const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {

});

server.listen(port, host, () => {
  console.log('Server running at ${host}:${port}');
});