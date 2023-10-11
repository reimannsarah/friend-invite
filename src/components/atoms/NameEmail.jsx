import React from "react";
import '../../styles/name_email.css'

const NameEmail = ({ name, email }) => {
  return (
    <div className="name-email">
      <h5 className="name">{name}</h5>
      <p className="email">{email}</p>
    </div>
  );
}

export default NameEmail;