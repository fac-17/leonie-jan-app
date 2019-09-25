import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import fetchPlayer from "./utils/fetchPlayer";
import fetchFollowers from "./utils/fetchFollowers";
import GamePage from "./components/GamePage";

function App() {
  const [name, setName] = React.useState("");
  const [githubObject, setGithubObject] = React.useState(null);
  const [followersData, setFollowersData] = React.useState(null);
  const [page, setPage] = React.useState("LandingPage");

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
            setFollowersData(data);
          })
        );
    }
  }, [name]);

  return (
    <div className="App">
      {page === "LandingPage" && (
        <LandingPage
          name={name}
          setName={setName}
          githubObject={githubObject}
          setGithubObject={setGithubObject}
          setPage={setPage}
        />
      )}
      {page === "GamePage" && (
        <GamePage githubObject={githubObject} followersData={followersData} />
      )}
    </div>
  );
}

export default App;
