import React from "react";
import "./Player.css";

const Player= ({githubObject})=>{
    const speed=5;
    const [coords,setCoords] = React.useState([100,12]);
    React.useEffect(()=>{
        const keyHandler = event => {
            if (event.key==="ArrowUp"){
                setCoords(c=>[c[0],c[1]-speed])
            }
            if (event.key==="ArrowDown"){
                 setCoords(c=>[c[0],c[1]+speed])
            }
            if (event.key==="ArrowLeft"){
                setCoords(c=>[c[0]-speed,c[1]])
            }
            if (event.key==="ArrowRight"){
                 setCoords(c=>[c[0]+speed,c[1]])
            }
        }
        window.addEventListener("keydown",keyHandler);
        return ()=>{
            window.removeEventListener("keydown",keyHandler)
        }
    },[])
    
    return (
        <div className="player"   style={{transform:" translate("+coords[0]+"px , "+coords[1]+"px)"}}>
        <img src={githubObject.avatar_url} alt="player" />
        {githubObject.login} {coords[0]+":"+coords[1]}
        </div>
    )
}
export default Player