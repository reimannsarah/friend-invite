import React from "react";
import FriendsModal from "../organisms/FriendsModal";

const Modal = ({toggleFriendModal, friends, invite, goHome}) => {
  return (
    <FriendsModal toggleFriendModal={toggleFriendModal} friends={friends} invite={invite} goHome={goHome}/>
  )
}

export default Modal;
