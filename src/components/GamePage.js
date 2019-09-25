import React from "react";
import "./GamePage.css";
import ScoreDisplay from "./ScoreDisplay";
import PlayingField from "./PlayingField";

const GamePage = ({githubObject}) => {
  return (
    <main className="MainPage">
      <div>Game Page</div>
      <ScoreDisplay />
      <PlayingField githubObject={githubObject}/>
    </main>
  );
};

export default GamePage;
