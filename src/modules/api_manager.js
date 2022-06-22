const reqScoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ev5yMffto11bWoMTkoDt/scores/';
const ScoreURL = new Request(reqScoreURL);

const loadLeaderBoard = async (callBack) => {
  const response = await fetch(ScoreURL);
  const leaderBoard = await response.json();
  callBack(leaderBoard.result);
};

export default loadLeaderBoard;