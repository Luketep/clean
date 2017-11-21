const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 5555;

server.listen(port);

console.log('Server started and listening to port %d', port);

app.use(express.static(`${__dirname}/target`));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});