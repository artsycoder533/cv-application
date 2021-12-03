import React, { Component } from 'react'

export default class DisplayCheckbox extends Component {
    render() {
        const {name, value,label, handleInput, index } = this.props;
        return (
          <React.Fragment>
            <input
              // className="form-check-input"
              type="checkbox"
              name={name}
              value={value}
              checked={value}
              onChange={(e)=>handleInput(e, index)}
            />
            <label>{label}</label>
          </React.Fragment>
        );
    }
}
