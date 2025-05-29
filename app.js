const API_URL = "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328";

async function fetchMatches() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const matches = data.events;

  const list = document.getElementById("matches-list");
  matches.forEach(match => {
    const item = document.createElement("li");
    item.textContent = `${match.strHomeTeam} vs ${match.strAwayTeam} - ${new Date(match.dateEvent + 'T' + match.strTime).toLocaleString()}`;
    list.appendChild(item);
  });
}

fetchMatches();
