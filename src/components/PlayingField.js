import React from "react";
import "./PlayingField.css";
import Player from "./Player";
import Follower from "./Follower";

const PlayingField = ({ githubObject, followersData }) => {
  const [followers, setFollowers] = React.useState([]);
  const randomInt = max => Math.floor(Math.random() * max);
  React.useEffect(() => {
    setFollowers(
      followersData.map(follower => {
        return {
          img: follower.avatar_url,
          name: follower.login,
          x: randomInt(800),
          y: randomInt(800),
          dx: randomInt(10) - 5,
          dy: randomInt(10) - 5,
          visible: true,
          timer: 0
        };
      })
    );
    setInterval(() => {
      setFollowers(followers =>
        followers.map(follower => {
          const { x, y, dx, dy, ...rest } = follower;
          return { ...rest, x: x + dx, y: y + dy, dx, dy };
        })
      );
    }, 50);
  }, [followersData, githubObject]);

  return (
    <div>
      <Player githubObject={githubObject} />

      {followers
        .filter(follower => follower.visible)
        .map(follower => (
          <Follower key={follower.name} follower={follower} />
        ))}
    </div>
  );
};

export default PlayingField;
