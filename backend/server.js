import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
app.use(cors());

app.get('/api/matches', async (req, res) => {
  try {
    const response = await fetch('https://api.football-data.org/v4/matches', {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY
      }
    });
    const data = await response.json();
    res.json(data.matches.slice(0, 10));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
