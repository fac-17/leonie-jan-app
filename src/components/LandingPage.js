import React from "react";

const LandingPage = () => {
  const [name, setName] = React.useState("LaLeonie");
  const updateName = event => {
    setName(event.target.value);
  };

  return (
    <main>
      <h1>Welcome to our game!</h1>
      <h2>Enter your Github name to get started</h2>
      <form>
        <input
          type="text"
          value={name}
          onChange={updateName}
          placeholder="Your Name"
        />
        <p>{name}</p>
        <button>Submit</button>
      </form>
    </main>
  );
};

export default LandingPage;
