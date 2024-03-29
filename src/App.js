import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import fetchPlayer from "./utils/fetchPlayer";
import fetchFollowers from "./utils/fetchFollowers";
import GamePage from "./components/GamePage";
import FinalPage from "./components/FinalPage";
import {
  LandingPageString,
  GamePageString,
  FinalPageString
} from "./utils/variables";

function App() {
  const [name, setName] = React.useState("");
  const [githubObject, setGithubObject] = React.useState(null);
  const [followersData, setFollowersData] = React.useState(null);
  const [page, setPage] = React.useState(LandingPageString);
  const [score, setScore] = React.useState(0);
  const [killer, setKiller] = React.useState("");

  React.useEffect(() => {
    let followers_url = null;
    if (name) {
      fetchPlayer(name)
        .then(data => {
          setGithubObject(data);
          followers_url = data.followers_url;
        })
        .then(() =>
          fetchFollowers(followers_url).then(data => {
            setFollowersData(data.sort(() => Math.random() - 0.5));
          })
        );
    }
  }, [name]);

  return (
    <div className="App">
      {page === LandingPageString && (
        <LandingPage
          setName={setName}
          githubObject={githubObject}
          setPage={setPage}
        />
      )}
      {page === GamePageString && (
        <GamePage
          setPage={setPage}
          githubObject={githubObject}
          followersData={followersData}
          score={score}
          setScore={setScore}
          setKiller={setKiller}
          name={name}
        />
      )}
      {page === FinalPageString && (
        <FinalPage
          setPage={setPage}
          score={score}
          killer={killer}
          name={name}
          setScore={setScore}
        />
      )}
    </div>
  );
}

export default App;
