import React from "react";
import Checkbox from "../atoms/Checkbox"; 
import NameEmail from "../atoms/NameEmail";

const Friend = ({friend}) => {
  const {firstName, lastName, email} = friend;
  return (
    <div>
      <Checkbox />
      <NameEmail name={`${firstName} ${lastName}`} email={email}/>
    </div>

  )
}

export default Friend;

