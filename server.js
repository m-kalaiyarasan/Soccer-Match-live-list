const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/matches', async (req, res) => {
  const apiUrl = 'https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328';
  const response = await fetch(apiUrl);
  const data = await response.json();
  res.json(data.events);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
