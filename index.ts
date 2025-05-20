// index.ts
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  const body = `Hello! ${new Date().toISOString()} - ${Math.random().toString(36).slice(2)}\n`;
  console.log('Responding with body of length:', body.length);
  res.set('Cache-Control', 'public');
  res.type('text/plain').send(body);
});


app.listen(5000, () => console.log('App listening on port 5000!'));
