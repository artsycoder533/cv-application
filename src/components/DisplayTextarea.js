import React, { Component } from "react";

export default class DisplayTextarea extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { type, label, name, cols, rows, index, handleInput, value } =
      this.props;
    console.log(this.props);
    return (
      <div>
        <label htmlFor={name}>{label}</label>
        <br />
        <textarea
          type={type}
          name={name}
          cols={cols}
          rows={rows}
          value={value}
          onChange={(e) => handleInput(e, index)}
        />
      </div>
    );
  }
}
