import "./FinalPage.css";
import React from "react";

const FinalPage = ({ score, killer, name, setPage }) => {
  React.useEffect(()=>{
      let hs=JSON.parse(localStorage.getItem('hs')||"[]");
      hs.push({name,killer,score});
      localStorage.setItem('hs',JSON.stringify(hs));

  },[score,killer,name])
  return (
    <main>
      <h1>Game Over {name}</h1>
      <h2>Your score is: {score} </h2>
      <p>
        You were forced to merge with <span className="killer">{killer}</span>
      </p>
      <button onClick={() => setPage("LandingPage")}>Play Again</button>
    </main>
  );
};

export default FinalPage;
