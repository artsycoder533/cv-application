import React, { Component } from "react";

export default class DisplayInput extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor={this.props.name}>{this.props.label}: </label>
        <input
          onChange={(e) => this.props.handleInput(e, this.props.index)}
          name={this.props.name}
          value={this.props.value}
          type={this.props.type}
          placeholder={this.props.placeholder}
          id={this.props.id}
        />
      </React.Fragment>
    );
  }
}
