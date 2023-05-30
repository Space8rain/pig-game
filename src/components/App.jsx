import React from "react";
import "./App.scss";
import Player from "./player/Player";
import Dice from './dice/Dice';

function App() {

  const [currentSideDice, setCurrentSideDice] = React.useState(1);

  function rollDice () {
    let random = Math.ceil(Math.random() * 6);
    setCurrentSideDice(random)
  }

  const playerList = [
    {
      name: 'Player 1',
      current: 0,
      score: 0,
      isActive: false
    },
    {
      name: 'Player 2',
      current: 0,
      score: 0,
      isActive: false
    },
    {
      name: 'Player 3',
      current: 0,
      score: 0,
      isActive: false
    },
  ]

  return (
    <div className="App">
        <div className="game">

          <div className="players">
            {playerList && playerList.map((player, i) => (
              <Player key={i} data={player} />
            ))}
          </div>

          <Dice currentSideDice={currentSideDice}/>
          <div id="roll" className="roll_button">
            <button onClick={rollDice}>Roll dice!</button>
            <button >Hold</button>
          </div>

        </div>
    </div>
  );
}

export default App;
