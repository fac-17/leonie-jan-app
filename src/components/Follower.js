import React from "react";

const Follower = ({ follower }) => {
  return (
    <div
      className="follower"
      style={{ transform: `translate(${follower.x}px,${follower.y}px)` }}
    >
      <img src={follower.img} alt="follower" />
    </div>
  );
};

export default Follower;
