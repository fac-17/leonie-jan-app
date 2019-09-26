const animateFollower = (follower,width,height,mobSize)=>{
    let { x, y, dx, dy, ...rest } = follower;
    x+=dx;
    if (x<mobSize/2 || x>width-mobSize/2){
        dx=-dx
        x+=dx*2
    }
    y+=dy;
    if (y<mobSize/2 || y>height-mobSize/2){
        dy=-dy
        y+=dy*2
    }
    if (areCirclesIntersecting(follower,{x:follower.playerCoords[0],y:follower.playerCoords[1]},mobSize)){
        console.log("Collision!");
    }
    return { ...rest, x, y, dx, dy };
}
const areCirclesIntersecting=(c1,c2,radius)=>{
    // console.log(c2.x);
    const distance=Math.sqrt(Math.pow(c1.x-c2.x,2)+Math.pow(c1.y-c2.y,2))
    return distance<radius
}
export default animateFollower