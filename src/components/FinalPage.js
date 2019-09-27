import "./FinalPage.css";
import React from "react";
import HighScoreBoard from "./HighScoreBoard";

const FinalPage = ({ score, killer, name, setPage, setScore }) => {
  React.useEffect(() => {
    let hs = JSON.parse(localStorage.getItem("hs") || "[]");
    hs.push({ name, killer, score });
    localStorage.setItem("hs", JSON.stringify(hs));
  }, [score, killer, name]);
  return (
    <main className="FinalPage">
      <h1>Game Over {name}</h1>
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
      <HighScoreBoard />
    </main>
  );
};

export default FinalPage;
