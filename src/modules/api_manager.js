const reqScoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/aDlDXb9nUEqfbts6gGH9/scores/';
const ScoreURL = new Request(reqScoreURL);

const regdGame = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const request = new Request(requestURL);
  const myGame = { name: 'Chill Out' };
  fetch(request, {
    method: 'POST',
    body: JSON.stringify(myGame),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const loadLeaderBoard = async (callBack) => {
  const response = await fetch(ScoreURL);
  const leaderBoard = await response.json();
  callBack(leaderBoard.result);
};

const postNewScore = async (scoreData) => {
  fetch(ScoreURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  })
    .then((response) => response.json())
    .then((score) => {
      console.log('New score added:', score);
    });
};

export { loadLeaderBoard, postNewScore, regdGame };