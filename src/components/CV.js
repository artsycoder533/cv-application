import React, { Component } from 'react';
import uniqid from "uniqid";

export default class CV extends Component {
    render() {
        const { general, education, experience, skills } = this.props;
        const { name, email, phone, portfolio, linkedIn, github } = general;
        const { school, major, attending, graduate, degree } = education;
        const { title, company, startDate, endDate, employed, duties } = experience;
    
        return (
            <div>
                <div className="general">
                    <h1>{name}</h1>
                </div>
            </div>
        )
    }
}

//General Form
//Education 
//Experience
//Skills