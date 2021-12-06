import React, { Component } from "react";
import { StyledRadio,  Container } from "./style";

export default class DisplayRadio extends Component {
  state = {
    values: ["Yes", "No"],
    graduate: this.props.graduate,
  };

  render() {
    const { name, handleInput, comp, index, graduate, id } = this.props;

    return (
      <Container>
        <span>Did you graduate?</span>
        {this.state.values.map((val) => {
          return (
            <div>
              <StyledRadio
                type="radio"
                name={name}
                value={val}
                checked={graduate === val}
                onChange={(e) => handleInput(e, index)}
              />
              <label htmlFor={name}>{val}</label>
            </div>
          );
        })}
      </Container>
    );
  }
}

//
