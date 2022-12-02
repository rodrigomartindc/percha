import React from "react";
import "./inputForm.css"

function InputForm(props) {
  return (
    <div className="container-form">
      <label className="label-form">{props.title}</label>
      <input className="input-form"
        required={props.required}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      />
    </div>
  );
}

export default InputForm;