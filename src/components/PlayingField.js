import React from "react";
import "./PlayingField.css";
import Player from "./Player";
import Follower from "./Follower";
import animateFollower from "../utils/animateFollower";
import { FinalPageString } from "../utils/variables";

const PlayingField = ({
  githubObject,
  followersData,
  setScore,
  setPage,
  setKiller
}) => {
  const width = 1000;
  const height = 600;
  const mobSize = 100;
  const speed = 5;
  const paused = React.useRef();
  const [pausedShow, setPausedShow] = React.useState(false);
  const [followers, setFollowers] = React.useState([]);
  const [coords, setCoords] = React.useState([width / 2, height / 2]);
  const randomInt = max => Math.floor(Math.random() * max);

  React.useEffect(() => {
    paused.current = pausedShow;
  });

  React.useEffect(() => {
    setFollowers(
      followersData.map((follower, i) => {
        return {
          img: follower.avatar_url,
          name: follower.login,
          x: randomInt(width - mobSize * 2 + mobSize),
          y: randomInt(height - mobSize * 2 + mobSize),
          dx: randomInt(10) - 5,
          dy: randomInt(10) - 5,
          visible: false,
          dangerous: false,
          timer: i * 25,
          playerCoords: coords
        };
      })
    );
    const keyHandler = event => {
      if (event.key === " ") {
        setPausedShow(!paused.current);
      }
      if (paused.current) return;
      let changed = [0, 0];
      switch (event.key) {
        case "ArrowUp":
          changed = [0, -1];
          break;
        case "ArrowDown":
          changed = [0, 1];
          break;
        case "ArrowLeft":
          changed = [-1, 0];
          break;
        case "ArrowRight":
          changed = [1, 0];
          break;
        default:
          changed = [0, 0];
      }
      setCoords(c => {
        const newC = [
          Math.min(Math.max(c[0] + speed * changed[0], 0), width - mobSize),
          Math.min(Math.max(c[1] + speed * changed[1], 0), height - mobSize)
        ];
        setFollowers(followers =>
          followers.map(follower => ({ ...follower, playerCoords: newC }))
        );
        return newC;
      });
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [followersData]);
  React.useEffect(() => {
    let interval = 0;
    interval = setInterval(() => {
      if (paused.current) return;
      setScore(score => score + 1);
      setFollowers(followers => {
        return followers.map((follower, i) => {
          const [animatedFollower, collision] = animateFollower(
            follower,
            width,
            height,
            mobSize
          );
          if (collision) {
            setKiller(animatedFollower.name);
            setPage(FinalPageString);
          }
          return animatedFollower;
        });
      });
    }, 50);
    return () => clearInterval(interval);
  }, [followersData, githubObject]);

  return (
    <div className="playing-field" style={{ width, height }}>
      {pausedShow && <h1 className="paused">Paused!</h1>}
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
