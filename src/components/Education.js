import React, { Component } from 'react';

export default class Education extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="education">
                <h2>Education</h2>
                <label htmlFor="school">School: </label>
                <input type="text" />
                <label htmlFor="major">Major: </label>
                <input type="text" />
                <br />
                <label htmlFor="startDate">Date Started: </label>
                <input type="date" />
                <label htmlFor="graduationDate">Date Ended:</label>
                <input type="date" />
                <br />
                <label htmlFor="degree">Degree</label>
                <select name="degree" id="degree">
                    <option value="bachelors">Bachelors</option>
                    <option value="bachelors">Masters</option>
                    <option value="bachelors">Certificate</option>
                </select>
            </div>
        )
    }
}

