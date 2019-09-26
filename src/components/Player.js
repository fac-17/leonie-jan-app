import React from "react";
import "./Player.css";

const Player= ({githubObject,coords})=>{
    return (
        <div className="player"   style={{transform:" translate("+coords[0]+"px , "+coords[1]+"px)"}}>
        <img src={githubObject.avatar_url} alt="player" />
        {/* {githubObject.login} {coords[0]+":"+coords[1]} */}
        </div>
    )
}
export default Player