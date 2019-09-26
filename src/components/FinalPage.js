import "./FinalPage.css";
import React from "react";

const FinalPage = ({ score, killer, setPage }) => {
  return (
    <main>
      <h1>Game Over</h1>
      <h2>Your score is: {score} </h2>
      <p>
        You were forced to merge with <span class="killer">{killer}</span>
      </p>
      <button onClick={() => setPage("LandingPage")}>Play Again</button>
    </main>
  );
};

export default FinalPage;
