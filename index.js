const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
  res.send('Hello, La nouvelle branche Develop!');
});

app.listen(3000);

