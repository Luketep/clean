const express = require('express');
const app = express();
const server = require('http').createServer(app);
const target = `${__dirname}/target`;
let { IP, PORT } = process.env;

if (!IP) {
    IP = '127.0.0.1';
}

if (!PORT) {
    PORT = 8080;
}

server.listen(PORT, IP);

console.log(`[WebServer] listen to ${IP}:${PORT}`);

app.use(express.static(target));

app.get('/', function AppRouteRoot(req, res) {
    res.sendFile(`${target}/index.html`);
});