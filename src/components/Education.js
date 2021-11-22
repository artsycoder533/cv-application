import React, { Component } from 'react';
import EducationInfo from './EducationInfo';


export default class Education extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="education">
                <h2>Education</h2>
                <EducationInfo />
                <br/>
            </div>
        )
    }
}

