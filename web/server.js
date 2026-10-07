const http = require('http');
http.createServer((req, res) => res.end('hello from web\n')).listen(3000);
