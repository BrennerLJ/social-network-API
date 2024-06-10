const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const port = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get('/api/users', (req, res) => {
  res.send(routes);
});

db.once("open", () => {
  app.listen(port, () => {
    console.log(`API server running on port ${port}!`);
  });
});