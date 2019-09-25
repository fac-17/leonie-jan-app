import React from "react";

const LandingPage = () => {
  const [input, setInput] = React.useState("LaLeonie");
  const [name, setName] = React.useState("");
  const [githubObject, setGithubObject] = React.useState(null);

  const updateInput = event => {
    setInput(event.target.value);
  };

  const updateName = event => {
    event.preventDefault();
    setName(input);
  };

  React.useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <main>
      <h1>Welcome to our game!</h1>
      <h2>Enter your Github name to get started</h2>
      <form onSubmit={updateName}>
        <input
          type="text"
          value={input}
          onChange={updateInput}
          placeholder="Your Name"
        />
        <p>
          {input},{name}
        </p>
        <button>Submit</button>
      </form>
      <button>Start Playing</button>
    </main>
  );
};

export default LandingPage;
