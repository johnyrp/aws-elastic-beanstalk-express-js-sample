const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome to AWS CI/CD, Changes successfully implemented and propogated!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
