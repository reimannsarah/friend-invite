import React from "react";
import '../../styles/checkbox.css'


const Checkbox = ({ checked, onChange }) => {
  return (
    <label>
      <input className="checkbox" type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
}

export default Checkbox;