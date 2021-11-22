import React, { Component } from 'react';
import GeneralInfo from './Education';
import { FiEdit3 } from "react-icons/fi";


export default class General extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="general">
                <h2>General Info</h2>
                <GeneralInfo/>
                <button type="button">
                    Edit Entry <FiEdit3 />
                </button>
            </div>
        );
    }
}
