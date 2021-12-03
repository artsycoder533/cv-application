import React, { Component } from 'react';

export default class DisplayInput extends Component {
  constructor(props) {
    super(props)
    //console.log(props);
  }

    render() {
     
      // console.log(this.props);
      // console.log(this.props.index);
        return (
          <div>
            <label htmlFor={this.props.name}>{this.props.label}</label>
            <br />
            <input
              onChange={(e)=>this.props.handleInput(e, this.props.index)}
              name={this.props.name}
              value={this.props.value}
              type={this.props.type}
              placeholder={this.props.placeholder}
              id={this.props.id}
            />
          </div>
        );
    }
}
