import React from "react";
import "./ScoreDisplay.css";

const ScoreDisplay = ({ score, name }) => {
  return (
    <div className="ScoreDisplay">
      <h2>{name}</h2>
      <div className="score">
        <h2>Your Score:</h2>
        <h2>{score}</h2>
      </div>
    </div>
  );
};

export default ScoreDisplay;
