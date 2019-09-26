const animateFollower = (follower,width,height,mobSize)=>{
    let collision=false;
    let { x, y, dx, dy, ...rest } = follower;
    x+=dx;
    if (x<0 || x>width-mobSize){
        dx=-dx
        x+=dx*2
    }
    y+=dy;
    if (y<0 || y>height-mobSize){
        dy=-dy
        y+=dy*2
    }
    if (areCirclesIntersecting(follower,{x:follower.playerCoords[0],y:follower.playerCoords[1]},mobSize)){
        collision=true
    }
    return [{ ...rest, x, y, dx, dy },collision];
}
const areCirclesIntersecting=(c1,c2,radius)=>{
    // console.log(c2.x);
    const distance=Math.sqrt(Math.pow(c1.x-c2.x,2)+Math.pow(c1.y-c2.y,2))
    return distance<radius
}
export default animateFollower