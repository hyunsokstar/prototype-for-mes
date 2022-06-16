import React from "react";


function CustomInput({ label, value, setValue, type = "text" }) {
  return (
    <span>
      <label>{label}</label>
      <input
        // style={{ width: "100%" }}
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
      />
    </span>
  );
}

export default CustomInput;
