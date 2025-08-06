fetch('./data/leaderboard.json')
  .then(res => res.json())
  .then(data => {
    const board = document.getElementById('leaderboard');
    data.sort((a, b) => b.points - a.points);
    data.forEach((player, index) => {
      const row = document.createElement('div');
      row.className = 'card';
      row.innerHTML = `<strong>#${index + 1}</strong> ${player.player} — ${player.points} pts`;
      board.appendChild(row);
    });
  });
