import React from "react";
import FriendsModal from "../organisms/FriendsModal";
import sampleData from "../../inviteCandidates";

const Modal = ({togglemodal}) => {
  return (
    <FriendsModal togglemodal={togglemodal} friends={sampleData}/>
  )
}

export default Modal;
