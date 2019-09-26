import React from "react";
import "./GamePage.css";
import ScoreDisplay from "./ScoreDisplay";
import PlayingField from "./PlayingField";

const GamePage = ({
  githubObject,
  followersData,
  score,
  setScore,
  setPage,
  setKiller
}) => {
  return (
    <main className="MainPage">
      <div>Game Page</div>
      <ScoreDisplay score={score} />
      <PlayingField
        githubObject={githubObject}
        followersData={followersData}
        score={score}
        setScore={setScore}
        setPage={setPage}
        setKiller={setKiller}
      />
    </main>
  );
};

export default GamePage;
