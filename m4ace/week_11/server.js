const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req; // Destructuring the request object

    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to the home page');
        res.end();
    } else if (url === '/about' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Currently on about page');
        res.end();
    } else if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Currently on contact page...contact us @ abdulwahabjide@gmail.com');
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server currently running at http://127.0.0.1:3000');
});
