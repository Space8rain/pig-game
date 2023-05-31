import React from "react";
import './Player.scss';

function Player({data}) {
  return (
    <div className="player">
      <h1 className="player_name">{data.name}{data.isActive && <p className="active"></p>}</h1>
      <h2 className="player_current">{data.current}</h2>
      <div className="player_score">
        <p>Score</p>
        <p>{data.score}</p>
      </div>
    </div>
  );
};

export default Player;