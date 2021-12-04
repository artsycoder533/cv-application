import React, { Component } from 'react';
import uniqid from "uniqid";

export default class DisplaySelect extends Component {
    
    render() {
        const { label, value, name, handleInput, index, options } = this.props;
      
        return (
          <div>
            <label>{label}</label>
            <select name={name} value={value} onChange={(e)=>handleInput(e, index)}>
              <option disabled value="">
                {"Select Level"}
              </option>
              {options.map((level) => {
                return <option key={uniqid()}>{level}</option>;
              })}
            </select>
          </div>
        );
    }
}
