import React from "react";
import "./App.scss";
import Player from "./player/Player";
import Dice from './dice/Dice';

function App() {

  const [currentPlayerId, setCurrentPLayerId] = React.useState(0);

  const [currentSideDice, setCurrentSideDice] = React.useState(1);

  const [isWinner, setIsWinner] = React.useState(true);

  const [players, setPlayers] = React.useState(
    [
      {
        name: 'Player 1',
        current: 0,
        score: 0,
        isActive: true,
      },
      {
        name: 'Player 2',
        current: 0,
        score: 0,
        isActive: false,
      },
    ]
  );

  function rollDice () {
    const copyPlayers = [...players];
    let random = Math.ceil(Math.random() * 6);
    setCurrentSideDice(random);
    if (random === 1) {
      copyPlayers[currentPlayerId].current = 0;
      setPlayers(copyPlayers);
      switchActivePlayer();
    } else {
      copyPlayers[currentPlayerId].current += random;
      setPlayers(copyPlayers);
      checkWinner()
    };
  };

  function storeScore() {
    const copyPlayers = [...players];
    copyPlayers[currentPlayerId].score += players[currentPlayerId].current;
    copyPlayers[currentPlayerId].current = 0;
    setPlayers(copyPlayers);
    switchActivePlayer();
  }

  function switchActivePlayer () {
    const nextPlayerId = currentPlayerId + 1;
    const copyPlayers = [...players];

    if (nextPlayerId > copyPlayers.length - 1) {
      copyPlayers[currentPlayerId].isActive = false;
      copyPlayers[0].isActive = true;
  
      setPlayers(copyPlayers);
      setCurrentPLayerId(0);

    } else {
      copyPlayers[currentPlayerId].isActive = false;
      copyPlayers[nextPlayerId].isActive = true;
  
      setPlayers(copyPlayers);
      setCurrentPLayerId(nextPlayerId);
    }
  };

  function addPlayer () {
    const copyPlayers = [...players];
    copyPlayers.push(
      {
        name: `Player ${copyPlayers.length + 1}`,
        current: 0,
        score: 0,
        isActive: false,
      }
    )
    setPlayers(copyPlayers);
  };

  function removePlayer () {
    const copyPlayers = [...players];
    copyPlayers.pop();
    setPlayers(copyPlayers);
  };

  function checkWinner() {
    if (players[currentPlayerId].score + players[currentPlayerId].current >= 100) {
      setIsWinner(true);
    }
  }

  function resetScore() {
    const copyPlayers = players.map((player) => {
      return {
        ...player,
        current: 0,
        score: 0,
      }
    });
    setPlayers(copyPlayers);
    setIsWinner(false)
  }

  return (
    <div className="App">
        <div className="game">

          <div className="players">
            {players && players.map((player, i) => (
              <Player key={i} data={player} />
            ))}
          </div>

          <Dice currentSideDice={currentSideDice}/>
          <div className="roll_button">
            <button onClick={rollDice}>Roll dice !</button>
            <button onClick={storeScore}>Hold</button>
          </div>
          <div className="rules_button">
            <p>
              Players take turns to roll a single dice as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1. If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
              <br />
              Press "+" to add player.
              <br />
              Press "-" to remove player.
            </p>
          </div>
          <div className="add_button">
            <button disabled={players.length === 4} onClick={addPlayer} >+</button>
          </div>
          <div className="remove_button">
            <button disabled={players.length === 2}  onClick={removePlayer}>-</button>
          </div>
        </div>

        {isWinner && <div className="winner">
          <div className="overlay">
            <div className="banner">
              <h2 className="player">{`Winner ${players[currentPlayerId].name} !!!`}</h2>
              <button onClick={resetScore}>Retry</button>
            </div>
          </div>
        </div>}
    </div>
  );
}

export default App;
