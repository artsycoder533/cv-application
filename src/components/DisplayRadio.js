import React, { Component } from 'react'

export default class DisplayRadio extends Component {
      
     state = {
        values: ["yes", "no"],
        graduate: this.props.graduate,
      };
 
  
  render() {
    const { name, handleInput, comp, index, graduate, id } = this.props;
   
    return (
      <React.Fragment>
        {this.state.values.map((val) => {
          console.log(name, val);
          return (
            <React.Fragment >
              <input
                type="radio"
                name={name}
                value={val}
                checked={graduate === val}
                onChange={(e) => handleInput(e, index)}
              />
              <label htmlFor={name}>{val}</label>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}


//