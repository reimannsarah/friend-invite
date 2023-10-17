import React from "react";
import '../../styles/checkbox.css'

const CheckBox = ({ children, onClick }) => {
  return (
    <label>
      <input className="checkbox" type="checkbox" onClick={onClick} value={children}/>
    </label>
  );
}

export default CheckBox;