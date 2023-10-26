import React from "react";
import Button from "../atoms/Button";

const Confirm = ({message, toggle, goHome}) => {
  return (
    <div>
      <h2>{message}</h2>
      <Button className={"btn btn-primary"} onClick={toggle} children="Invite More Friends"/>
      <Button className={"btn btn-primary"} onClick={goHome} children="Home"/>
    </div>
  )
}

export default Confirm;