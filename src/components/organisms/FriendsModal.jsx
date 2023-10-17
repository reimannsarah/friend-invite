import React, { useState } from "react";
import Button from "../atoms/Button";
import '../../styles/friends_modal.css'
// import CheckBox from "../atoms/CheckBox";
// import NameEmail from "../atoms/NameEmail";
import Friend from "../molecules/Friend";

const FriendsModal = ({ friends, toggleModal }) => {
  const [selectedFriends, setSelectedFriends] = useState([]);
  {console.log(selectedFriends)}
  const handleClick = (friend) => {
    if(!selectedFriends.includes(friend)){
      setSelectedFriends([...selectedFriends, friend])
    }else{
      setSelectedFriends(selectedFriends.filter((f) => f !== friend));
    }
  }

  return (
    <div className="friends-modal">
      <Button children={"X"} onClick={toggleModal} />
      <form>
        {friends.map((friend, index) => {
          return (
            <Friend friend={friend} onClick={() => {handleClick(friend.email)}} key={index}/>
          )
        })}
        <Button children={selectedFriends.length == 0 ? "Send Invites" : selectedFriends.length == 1 ? `Send ${selectedFriends.length} Invite` : `Send ${selectedFriends.length} Invites`} className={"btn btn-primary"} disabled={selectedFriends.length == 0}/>
      </form>
    </div>
  );
};

export default FriendsModal;
