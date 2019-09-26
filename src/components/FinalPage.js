import "./FinalPage.css";
import React from "react";

const FinalPage = ({ score, killer, name }) => {
  React.useEffect(()=>{
    console.log("High score!");
      let hs=JSON.parse(localStorage.getItem('hs')||"[]");
      hs.push({name,killer,score});
      localStorage.setItem('hs',JSON.stringify(hs));

  },[score,killer,name])
  return (
    <main>
      <h1>Game Over {name}</h1>
      <h2>Your score is: {score} </h2>
      <p> You were forced to merge with {killer}</p>
    </main>
  );
};

export default FinalPage;
