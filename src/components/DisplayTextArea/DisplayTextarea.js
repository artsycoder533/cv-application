import React, { Component } from "react";
import { StyledTextArea, StyledLabel } from "./style";

export default class DisplayTextarea extends Component {

  render() {
    const { type, label, name, cols, rows, index, handleInput, value, placeholder } =
      this.props;
    return (
      <div>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <br />
        <StyledTextArea
          type={type}
          name={name}
          cols={cols}
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={(e) => handleInput(e, index)}
        />
      </div>
    );
  }
}
