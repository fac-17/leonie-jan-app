import React from "react";
import "./LandingPage.css";

const LandingPage = ({
  name,
  setName,
  githubObject,
  setGithubObject,
  setPage
}) => {
  const [input, setInput] = React.useState("LaLeonie");

  const updateInput = event => {
    setInput(event.target.value);
  };

  const updateName = event => {
    event.preventDefault();
    setName(input);
  };

  return (
    <main className="LandingPage">
      <h1>Welcome to our game!</h1>
      <h2>Enter your Github name to get started</h2>
      <form onSubmit={updateName}>
        <input
          type="text"
          value={input}
          onChange={updateInput}
          placeholder="Your Name"
        />
        {/* <p>
          {input},{name}, {JSON.stringify(githubObject)}
        </p> */}
        <button>Submit</button>
      </form>
      {githubObject && (
        <div className="playerDisplay">
          <img src={githubObject.avatar_url} alt="ProfilePic" />
          <button onClick={() => setPage("GamePage")}>Start Playing</button>
        </div>
      )}
    </main>
  );
};

export default LandingPage;
