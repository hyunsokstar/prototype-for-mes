import React from "react";


interface IProps {
    label: any
    value: any
    setValue: (row: any) => void
    type: any
}

function CustomInput({ label, value, setValue, type = "text" }:IProps) {

    return (
        <div>
          <label>{label}</label>
          <input
            style={{ width: "100%" }}
            value={value}
            type={type}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      );

}

export default CustomInput;