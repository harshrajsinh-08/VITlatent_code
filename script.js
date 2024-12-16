let scoreboard = [];

function calculateScore() {
    const name = document.getElementById('contestantName').value;
    const score1 = parseFloat(document.getElementById('judge1').value);
    const score2 = parseFloat(document.getElementById('judge2').value);
    const score3 = parseFloat(document.getElementById('judge3').value);

    if (!name || isNaN(score1) || isNaN(score2) || isNaN(score3)) {
        alert('Please fill in all fields with valid numbers');
        return;
    }

    if (score1 < 0 || score1 > 10 || score2 < 0 || score2 > 10 || score3 < 0 || score3 > 10) {
        alert('Scores must be between 0 and 10');
        return;
    }

    const avgScore = (score1 + score2 + score3) / 3;
    // Round to nearest 0.5
    const finalScore = Math.round(avgScore * 2) / 2;

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('finalScore').textContent = finalScore.toFixed(1);

    // Add to scoreboard
    scoreboard.push({ name, score: finalScore });
    scoreboard.sort((a, b) => b.score - a.score);
    updateScoreboard();

    // Reset form
    document.getElementById('contestantName').value = '';
    document.getElementById('judge1').value = '';
    document.getElementById('judge2').value = '';
    document.getElementById('judge3').value = '';
}

function updateScoreboard() {
    const tbody = document.getElementById('scoreboardBody');
    tbody.innerHTML = '';
    
    scoreboard.forEach((entry) => {
        const row = document.createElement('tr');
        row.classList.add('border-b', 'border-[#1a1a2e]', 'hover:bg-[#1a1a2e]', 'transition-colors');
        row.innerHTML = `
            <td class="p-4">${entry.name}</td>
            <td class="p-4">${entry.score.toFixed(1)}</td>
        `;
        tbody.appendChild(row);
    });
}