import React from "react";
import "./ScoreDisplay.css";

const ScoreDisplay = ({ score }) => {
  return (
    <div>
      <h2>{score}</h2>
    </div>
  );
};

export default ScoreDisplay;
