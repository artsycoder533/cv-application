import React, { Component } from "react";
import { StyledInput , StyledLabel, Container} from "./style";

export default class DisplayInput extends Component {
  render() {
    return (
      <Container>
        <StyledLabel htmlFor={this.props.name}>{this.props.label}: </StyledLabel>
        <StyledInput
          onChange={(e) => this.props.handleInput(e, this.props.index)}
          name={this.props.name}
          value={this.props.value}
          type={this.props.type}
          placeholder={this.props.placeholder}
          id={this.props.id}
        />
      </Container>
    );
  }
}
