import React from "react";
import "./GamePage.css";
import ScoreDisplay from "./ScoreDisplay";
import PlayingField from "./PlayingField";

const GamePage = () => {
  return (
    <main className="MainPage">
      <div>Game Page</div>
      <ScoreDisplay />
      <PlayingField />
    </main>
  );
};

export default GamePage;
