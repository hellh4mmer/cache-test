// server.js
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  console.log('Request received');
  res.set('Cache-Control', 'public, max-age=60');
  res.send('Hello! ' + new Date().toISOString());
});

app.listen(5000, () => console.log('App listening on port 5000!'));
