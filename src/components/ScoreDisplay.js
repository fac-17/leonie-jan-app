import React from "react";
import "./ScoreDisplay.css";

const ScoreDisplay = ({ score, name }) => {
  return (
    <div className="ScoreDisplay">
      <h2>{name}</h2>
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default ScoreDisplay;
