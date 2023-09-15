import React from "react";
import Friend from "../molecules/Friend";

const FriendsModal = ({ friends }) => {
  return (
    <div>
      {friends.map((friend) => {
        return <Friend friend={friend} />;
      })}
    </div>
  );
}

export default FriendsModal;