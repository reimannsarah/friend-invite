import React from "react";
import CheckBox from "../atoms/CheckBox"; 
import NameEmail from "../atoms/NameEmail";
import '../../styles/friend.css'

const Friend = ({friend, onClick, index}) => {
  const {firstName, lastName, email} = friend;
  return (
    <div className="friend" key={index}>
      <CheckBox onClick={onClick} value={email}/>
      <NameEmail name={`${firstName} ${lastName}`} email={email}/>
    </div>

  )
}

export default Friend;

