import React from "react";
import "./PlayingField.css";
import Player from "./Player";
import Follower from "./Follower";
import animateFollower from "../utils/animateFollower";

const PlayingField = ({ githubObject, followersData }) => {
  const [followers, setFollowers] = React.useState([]);
  const width = 1000;
  const height = 600;
  const mobSize = 100;
  const speed = 5;
  const [coords, setCoords] = React.useState([100, 12]);
  const randomInt = max => Math.floor(Math.random() * max);
  const coordsChange = changed => {
    setCoords(changed);
    console.log(changed);
    setFollowers(followers =>
      followers.map(follower => ({ ...follower, playerCoords: changed }))
    );
  };
  React.useEffect(() => {
    const keyHandler = event => {
      if (event.key === "ArrowUp") {
        setCoords(c => {
          const changed=[c[0], c[1] - speed];
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed
        });
      }
      if (event.key === "ArrowDown") {
        setCoords(c => {
          const changed=[c[0], c[1] + speed];
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed
        });
      }
      if (event.key === "ArrowLeft") {
        setCoords(c => {
          const changed=[c[0] - speed, c[1]];
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed
        });
      }
      if (event.key === "ArrowRight") {
        setCoords(c => {
          const changed=[c[0] + speed, c[1]];
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed
        });
      }
    };
    window.addEventListener("keydown", keyHandler);
    setFollowers(
      followersData.map(follower => {
        return {
          img: follower.avatar_url,
          name: follower.login,
          x: randomInt(width - mobSize * 2 + mobSize),
          y: randomInt(height - mobSize * 2 + mobSize),
          dx: randomInt(10) - 5,
          dy: randomInt(10) - 5,
          visible: true,
          timer: 0,
          playerCoords: coords
        };
      })
    );
    setInterval(() => {
      setFollowers(followers => {
        return followers.map(follower => {
          return animateFollower(follower, width, height, mobSize);
        });
      });
    }, 50);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [followersData, githubObject]);

  return (
    <div>
      <Player githubObject={githubObject} coords={coords} />

      {followers
        .filter(follower => follower.visible)
        .map(follower => (
          <Follower key={follower.name} follower={follower} />
        ))}
    </div>
  );
};

export default PlayingField;
