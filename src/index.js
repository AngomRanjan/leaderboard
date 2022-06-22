import './style.css';
import renderUI from './modules/render_functions.js';

renderUI();
/*
// testing Api
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const request = new Request(requestURL);

const response = await fetch(request);
const superHeroes = await response.json();
/*const ss = [1,'n'];
for (const s of ss) {
  console.log(s);
}; *//*
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const request = new Request(requestURL);
const myGame = { name: 'Chill Out', };
fetch(request, {
  method: 'POST',
  body: JSON.stringify(myGame),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json));

const reqScoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ev5yMffto11bWoMTkoDt/scores/';
const ScoreURL = new Request(reqScoreURL);
const scoreData = {
  user: 'a',
  score: 5
};

fetch(ScoreURL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(scoreData),
})
  .then(response => response.json())
  .then(score => {
    console.log('New score added:', score);
  });

const response = await fetch(ScoreURL);
const superHeroes = await response.json();

console.table(superHeroes);
for (const leader of superHeroes.result) {
  console.log(leader.user + ': ' + leader.score);
}
//id K0vP4qpsW1caDMEXQfpr */
