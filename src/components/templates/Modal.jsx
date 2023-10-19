import React from "react";
import FriendsModal from "../organisms/FriendsModal";

const Modal = ({toggleModal, friends}) => {
  return (
    <FriendsModal toggleModal={toggleModal} friends={friends}/>
  )
}

export default Modal;
