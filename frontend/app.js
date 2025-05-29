const API_URL = 'http://localhost:3000/api/matches';
async function loadMatches() {
  try {
    const response = await fetch(API_URL);
    const matches = await response.json();
    const list = document.getElementById("matches-list");
    matches.forEach(match => {
      const li = document.createElement("li");
      li.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name} — ${new Date(match.utcDate).toLocaleString()}`;
      list.appendChild(li);
    });
  }catch (err) {
    console.error("Failed to load matches:", err);
  }
}
loadMatches();
