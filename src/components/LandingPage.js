import React from "react";
import "./LandingPage.css";


const LandingPage = ({
  setName,
  githubObject,
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
      <h1>
        Welcome to <br />
        <span className="game-name">Flee Your Followers!</span>
      </h1>

      <form onSubmit={updateName}>
        <label htmlFor="name-input">
          Enter your Github name to get started
          <input
            id="name-input"
            type="text"
            value={input}
            onChange={updateInput}
            placeholder="Your Name"
          />
        </label>
        <button>Submit</button>
      </form>
      {githubObject && (
        <div className="playerDisplay">
          <img data-testid="avatar" src={githubObject.avatar_url} alt="ProfilePic" />
          <button onClick={() => setPage("GamePage")}>Start Playing</button>
        </div>
      )}
    </main>
  );
};

export default LandingPage;
