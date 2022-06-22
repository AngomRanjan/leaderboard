import loadLeaderBoard from './api_manager.js';

const populateLeaderBoard = (leaders) => {
  const ulLeaderboard = document.getElementById('leaderboard');
  leaders.forEach((leader) => {
    const liLeaders = document.createElement('li');
    liLeaders.className = 'leaders';
    liLeaders.textContent = `${leader.user}: ${leader.score}`;
    ulLeaderboard.appendChild(liLeaders);
  });
};

const formAddNewSubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById('username').value;
  const mScore = document.getElementById('score').value;
  console.log(`name: ${name} score: ${mScore}`);
  e.stopPropagation();
};

const btnRefreshClick = (e) => {
  loadLeaderBoard(populateLeaderBoard);
  e.stopPropagation();
};

const renderUI = async () => {
  loadLeaderBoard(populateLeaderBoard);
  const btnRefresh = document.getElementById('btn-refresh');
  const formAddNew = document.getElementById('form-add-new');
  btnRefresh.addEventListener('click', btnRefreshClick);
  formAddNew.addEventListener('submit', formAddNewSubmit);
};

export default renderUI;