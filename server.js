const express = require('express');
const sum = require('./sum');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/sum/:a/:b', (req, res) => {
  const {a,b} = req.query;
    const result = sum(parseInt(a), parseInt(b));
    console.log(`Sum of ${a} and ${b} is ${result}`);
    res.json({ result });
});