import React from "react";
import "./PlayingField.css";
import Player from "./Player";
import Follower from "./Follower";
import animateFollower from "../utils/animateFollower";

const PlayingField = ({
  githubObject,
  followersData,
  setScore,
  setPage,
  setKiller
}) => {
  const [followers, setFollowers] = React.useState([]);
  const width = 1000;
  const height = 600;
  const mobSize = 100;
  const speed = 5;
  const [coords, setCoords] = React.useState([width / 2, height / 2]);
  const randomInt = max => Math.floor(Math.random() * max);

  React.useEffect(() => {
    let interval = 0;
    const keyHandler = event => {
      if (event.key === "ArrowUp") {
        setCoords(c => {
          const changed=[c[0], Math.min(Math.max(c[1] - speed,0),height-mobSize)];
          
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed;
        });
      }
      if (event.key === "ArrowDown") {
        setCoords(c => {
          const changed=[c[0],  Math.min(Math.max(c[1] + speed,0),height-mobSize)];
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed;
        });
      }
      if (event.key === "ArrowLeft") {
        setCoords(c => {
          const changed=[ Math.min(Math.max(c[0] - speed,0),width-mobSize), c[1]];
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed;
        });
      }
      if (event.key === "ArrowRight") {
        setCoords(c => {
          const changed=[ Math.min(Math.max(c[0] + speed,0),width-mobSize), c[1]];
          setFollowers(followers =>
            followers.map(follower => ({ ...follower, playerCoords: changed }))
          );
          return changed;
        });
      }
    };
    window.addEventListener("keydown", keyHandler);
    setFollowers(
      followersData.map((follower,i) => {
        return {
          img: follower.avatar_url,
          name: follower.login,
          x: randomInt(width - mobSize * 2 + mobSize),
          y: randomInt(height - mobSize * 2 + mobSize),
          dx: randomInt(10) - 5,
          dy: randomInt(10) - 5,
          visible: false,
          dangerous:false,
          timer: i*25,
          playerCoords: coords
        };
      })
    );
    interval = setInterval(() => {
      setScore(score => score + 1);
      setFollowers( followers => {
        return followers.map((follower,i) => {
          const [animatedFollower, collision] = animateFollower(
            follower,
            width,
            height,
            mobSize,
          );
          if (collision) {
            setKiller(animatedFollower.name);
            setPage("FinalPage");
            console.log("Collided with ", animatedFollower.name);
          }
          return animatedFollower;
        });
      });
    }, 50);
    return () => {
      window.removeEventListener("keydown", keyHandler);
      clearInterval(interval);
    };
  }, [followersData, githubObject]);

  return (
    <div className="playing-field" style={{ width, height }}>
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
