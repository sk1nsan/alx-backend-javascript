const express = require('express');

const app = express();
app.all('/', (res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
