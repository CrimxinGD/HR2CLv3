const params = new URLSearchParams(window.location.search);
const levelId = parseInt(params.get("id"));

fetch('./data/levels.json')
  .then(res => res.json())
  .then(levels => {
    const level = levels.find(l => l.id === levelId);
    const container = document.getElementById('level-details');
    if (!level) return container.innerHTML = "Level not found!";
    container.innerHTML = `
      <div class="card">
        <h2>${level.name}</h2>
        <p><strong>Creator:</strong> ${level.creator}</p>
        <p><strong>Points:</strong> ${level.points}</p>
        <a href="${level.video}" target="_blank">Watch Video</a>
      </div>
    `;
  });
