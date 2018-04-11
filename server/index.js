const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

const server = app.listen(PORT);

app.use(express.static(path.join(__dirname, '..', 'target')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'target', 'index.html'));
});

module.exports = server;