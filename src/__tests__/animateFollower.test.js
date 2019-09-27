import animateFollower from "../utils/animateFollower";

it("follower moves right 5 points",()=>{
    const follower={x:10,y:20,dx:5,dy:2,timer:-1}
    const [animated]=animateFollower(follower,100,50,10);
    expect(animated.x).toBe(15)
})
it("follower moves left 5 points",()=>{
    const follower={x:10,y:20,dx:-5,dy:2,timer:-1}
    const [animated]=animateFollower(follower,100,50,10);
    expect(animated.x).toBe(5)
})
it("follower moves left 15 points and bounces from the border",()=>{
    const follower={x:10,y:20,dx:-15,dy:2,timer:-1}
    const [animated]=animateFollower(follower,100,50,10);
    expect(animated.x).toBe(25)
})
it("follower moves down 15 points and bounces from the border bottom",()=>{
    const follower={x:10,y:45,dx:0,dy:10,timer:-1}
    const [animated]=animateFollower(follower,100,50,10);
    expect(animated.y).toBe(35)
})
it("follower becomes visible when the time is up",()=>{
    const follower={x:10,y:45,dx:0,dy:10,timer:0}
    const [animated]=animateFollower(follower,100,50,10);
    expect(animated.visible).toBe(true)
})
it("follower becomes dangerous when the time is up",()=>{
    const follower={x:10,y:45,dx:0,dy:10,timer:-50,playerCoords:[100,200]}
    const [animated]=animateFollower(follower,100,50,10);
    expect(animated.dangerous).toBe(true)
})
it("follower collides with a player",()=>{
    const follower={x:10,y:45,dx:0,dy:10,timer:-50,playerCoords:[12,38]}
    const [,collision]=animateFollower(follower,100,50,10);
    expect(collision).toBe(true)
})
it("follower does not collides with a player",()=>{
    const follower={x:10,y:45,dx:0,dy:10,timer:-50,playerCoords:[12,8]}
    const [,collision]=animateFollower(follower,100,50,10);
    expect(collision).toBe(false)
})