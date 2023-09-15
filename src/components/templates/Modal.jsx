import React from "react";
import FriendsModal from "../organisms/FriendsModal";
import sampleData from "../../inviteCandidates";

const Modal = () => {
  return (
    <FriendsModal friends={sampleData}/>
  )
}

export default Modal;
