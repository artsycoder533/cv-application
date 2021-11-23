import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';


export default class General extends Component {

    render() {
        return (
            <div className="general">
                <h2>General Info</h2>
                <GeneralInfo />
            </div>
        );
    }
}
