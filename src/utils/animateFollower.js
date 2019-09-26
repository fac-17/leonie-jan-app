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
    return { ...rest, x, y, dx, dy };
}
export default animateFollower