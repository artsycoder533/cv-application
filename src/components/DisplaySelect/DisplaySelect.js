import React, { Component } from "react";
import uniqid from "uniqid";
import { StyledLabel, StyledOption, StyledSelect } from "./style";

export default class DisplaySelect extends Component {
  render() {
    const { label, value, name, handleInput, index, options } = this.props;

    return (
      <React.Fragment>
        <StyledLabel>{label}</StyledLabel>
        <StyledSelect
          name={name}
          value={value}
          onChange={(e) => handleInput(e, index)}>
          <StyledOption disabled value="">
            {"Select Level"}
          </StyledOption>
          {options.map((level) => {
            return <option key={uniqid()}>{level}</option>;
          })}
        </StyledSelect>
      </React.Fragment>
    );
  }
}
