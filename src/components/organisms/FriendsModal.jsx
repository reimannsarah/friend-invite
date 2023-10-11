import React from "react";
import Friend from "../molecules/Friend";
import Button from "../atoms/Button";
import '../../styles/friends_modal.css'

const FriendsModal = ({ friends, togglemodal }) => {
  return (
    <div className="friends-modal">
      <Button children={"X"} onClick={togglemodal}/>
      {friends.map((friend) => {
        return <Friend friend={friend} />;
      })}
      <Button children={"Invite"} className={"btn btn-primary"} />
    </div>
  );
}

export default FriendsModal;