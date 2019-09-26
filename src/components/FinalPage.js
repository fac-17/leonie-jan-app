import "./FinalPage.css";
import React from "react";

const FinalPage = ({ score, killer }) => {
  return (
    <main>
      <h1>Game Over</h1>
      <h2>Your score is: {score} </h2>
      <p> You were forced to merge with {killer}</p>
    </main>
  );
};

export default FinalPage;
