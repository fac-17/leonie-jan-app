import "./FinalPage.css";
import React, { useState } from "react";
import HighScoreBoard from "./HighScoreBoard";

const FinalPage = ({ score, killer, name, setPage, setScore }) => {
  const [hs, setHs] = useState(null);
  React.useEffect(() => {
    let hs = JSON.parse(localStorage.getItem("hs") || "[]");
    hs.push({ name, killer, score });
    localStorage.setItem("hs", JSON.stringify(hs));
    const sorted = hs.sort((a, b) => b.score - a.score).slice(0, 10);
    setHs(sorted);
  }, [score, killer, name]);
  return (
    <main className="FinalPage">
      <h1>
        Game Over <span className="game-name">{name}</span>
      </h1>
      <h2 className="subheader">Your score is: {score} </h2>
      <p>
        You were forced to merge with <span className="killer">{killer}</span>
      </p>
      <button
        onClick={() => {
          setScore(0);
          setPage("LandingPage");
        }}
      >
        Play Again
      </button>
      {hs && <HighScoreBoard hiscore={hs} />}
    </main>
  );
};

export default FinalPage;
