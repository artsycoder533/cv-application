import React, { Component } from 'react';
import CV from '../CV/CV';
import ReactToPrint from 'react-to-print';

export default class ComponentToPrint extends Component {
    render() {
        return (
          <div>
            <ReactToPrint
              trigger={() => {
                return <button>Download PDF</button>;
              }}
              content={() => this.componentRef}
            />
            <CV ref={(el) => (this.componentRef = el)} />
          </div>
        );
    }
}
