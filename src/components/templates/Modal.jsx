import React from "react";
import FriendsModal from "../organisms/FriendsModal";

const Modal = ({toggleModal, friends, invite}) => {
  return (
    <FriendsModal toggleModal={toggleModal} friends={friends} invite={invite}/>
  )
}

export default Modal;
