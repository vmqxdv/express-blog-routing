const express = require('express');
const app = express();
const PORT = 1229;


app.use(express.static('public'));

app.get('/', (_, res) => {
  res.send('test test test');
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});