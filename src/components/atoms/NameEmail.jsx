import React from "react";

const NameEmail = ({ name, email }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
}

export default NameEmail;