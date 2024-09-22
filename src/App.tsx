import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard';

interface Scores {
  score: number;
  highScore: number;
}

function App() {
  const [scores, setScores] = useState<Scores>({score: 0, highScore: 0})

  return (
    <>
      <h1>Memory Game</h1>
      <ul>
        <li>Score: {scores.score}</li>
        <li>High Score: {scores.highScore}</li>
      </ul>

      <GameBoard scores={scores} setScores={setScores}/>
    </>
  )
}

export default App

/*
Memory Cards. Displays a set of cards which will flip over to reveal images.
The user will then click an image and the cards will flip over and randomize.
Each time the user clicks a new card the score goes up by one.
If the use re-clicks the same card, the game ends.
Scoreboard to keep track of high score.
Cards images from API


<header>
  <h1>Memory Game</h1>
  <ul>
    <li>Score: {scores.score}</li>
    <li>High Score: {scores.highScore}</li>
  </ul>
</header>
<main>
  <div>
    <img src=""/>
    <h1>Billy Bob</h1>
  </div>
  <div>
    <img src=""/>
    <h1>Billy Bob</h1>
  </div>
  <div>
    <img src=""/>
    <h1>Billy Bob</h1>
  </div>
  <div>
    <img src=""/>
    <h1>Billy Bob</h1>
  </div>
  <div>
    <img src=""/>
    <h1>Billy Bob</h1>
  </div>
</main>
*/