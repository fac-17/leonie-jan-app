import React from "react";

const Follower = ({ follower }) => {
  return (
    <div data-testid="follower"
      className={"follower "+(follower.dangerous?"":"safe")}
      style={{ transform: `translate(${follower.x}px,${follower.y}px)` }}
    >
      <img src={follower.img} data-testid="avatar" alt="follower" />
    </div>
  );
};

export default Follower;
