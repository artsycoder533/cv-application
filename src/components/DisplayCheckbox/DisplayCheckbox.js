import React, { Component } from "react";
import { Container, StyledCheckbox, StyledLabel } from "./style";

export default class DisplayCheckbox extends Component {
  render() {
    const { name, value, label, handleInput, index } = this.props;
    return (
      <Container>
        <StyledCheckbox
          type="checkbox"
          name={name}
          value={value}
          checked={value}
          onChange={(e) => handleInput(e, index)}
        />
        <StyledLabel>{label}</StyledLabel>
      </Container>
    );
  }
}
