import React from "react";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
}

export default Checkbox;