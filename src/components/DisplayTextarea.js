import React, { Component } from 'react'

export default class DisplayTextarea extends Component {
    render() {
        const { type , label, name, cols, rows, index, handleInput} = this.props;
        return (
          <div>
            <label htmlFor={name}>{label}</label>
            <br />
            <textarea type={type} name={name} cols={cols} rows={rows} handleInput={(e)=>this.handleInput(e, index)} />
          </div>
        );
    }
}
