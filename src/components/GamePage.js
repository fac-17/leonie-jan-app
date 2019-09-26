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
  setKiller,
  name
}) => {
  return (
    <main className="MainPage">
      <ScoreDisplay score={score} name={name} />
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
