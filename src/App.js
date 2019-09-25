import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import fetchPlayer from "./utils/fetchPlayer";
import GamePage from "./components/GamePage";

function App() {
  const [name, setName] = React.useState("");
  const [githubObject, setGithubObject] = React.useState(null);
  const [page, setPage] = React.useState("LandingPage");

  React.useEffect(() => {
    if (name) {
      fetchPlayer(name).then(data => setGithubObject(data));
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
      {page === "GamePage" && <GamePage githubObject={githubObject} />}
    </div>
  );
}

export default App;
