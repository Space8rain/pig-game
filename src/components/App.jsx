import "./App.scss";
import Dice from './dice/Dice';

function App() {
  return (
    <div className="App">
        <div className="game">

          <div className="players">

            <div className="player">
              <h1 className="player_name">Player 1</h1>
              <h2 className="player_current">0</h2>
              <div className="player_score">
                <p>Score</p>
                <p>0</p>
              </div>
            </div>

            <div className="player">
              <h1 className="player_name">Player 2</h1>
              <h2 className="player_current">0</h2>
              <div className="player_score">
                <p>Score</p>
                <p>0</p>
              </div>
            </div>

            <div className="player">
              <h1 className="player_name">Player 2</h1>
              <h2 className="player_current">0</h2>
              <div className="player_score">
                <p>Score</p>
                <p>0</p>
              </div>
            </div>
            
          </div>
          <Dice />
            <div id="roll" className="roll_button">
              <button>Roll dice!</button>
            </div>

        </div>
    </div>
  );
}

export default App;
