const appendLeaderboardUl = (name, score) => {
  const ulLeaderboard = document.getElementById('leaderboard');
  const liLeaders = document.createElement('li');
  liLeaders.className = 'leaders';
  liLeaders.textContent = `${name}: ${score}`;
  ulLeaderboard.appendChild(liLeaders);
};

const leaders = [
  {
    name: 'Tomba',
    score: 45,
  },
  {
    name: 'Chaoba',
    score: 76,
  },
  {
    name: 'Yaima',
    score: 60,
  },
];

const renderUI = () => {
  leaders.forEach((leader) => {
    appendLeaderboardUl(leader.name, leader.score);
  });
};

export default renderUI;