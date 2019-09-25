import React from "react";
import "./PlayingField.css";
import Player from "./Player";

const PlayingField = ({githubObject}) => {
  return <div>
    <Player  githubObject={githubObject} />
  </div>;
};

export default PlayingField;
