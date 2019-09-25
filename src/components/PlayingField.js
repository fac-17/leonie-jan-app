import React from "react";
import "./PlayingField.css";
import Player from "./Player";

const PlayingField = ({githubObject,followersData}) => {
  console.log(followersData)
  const [followers,setFollowers]=React.useState([]);
  const randomInt=(max)=>Math.floor(Math.random()*max)
  React.useEffect(()=>{
    setFollowers(followersData.map(follower=>{
      return {
        img:follower.avatar_url,
        name:follower.login,
        x:randomInt(800),
        y:randomInt(800),
        dx:randomInt(10)-5,
        dy:randomInt(10)-5,
        visible:true,
        timer:0,
      }
    }));
  },[followersData,githubObject])
  return <div>
    <Player  githubObject={githubObject} />
    
    {followers
      .filter(follower=>follower.visible)
      .map(follower=><div key={follower.name}>{follower.name},<img src={follower.img} alt="follower"/> {follower.x},{follower.y}</div>)}
  </div>;
};

export default PlayingField;
