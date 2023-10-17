import React from "react";
import FriendsModal from "../organisms/FriendsModal";
import sampleData from "../../inviteCandidates";

const Modal = ({toggleModal}) => {
  return (
    <FriendsModal toggleModal={toggleModal} friends={sampleData}/>
  )
}

export default Modal;
