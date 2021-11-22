import React, { Component } from 'react';
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default class EducationInfo extends Component {
    render() {
        return (
            <div className="education__info">
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
                <label htmlFor="current">Are you still attending? </label>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="yes" id="yes" />
                <label htmlFor="no">No</label>
                <input type="radio" name="no" id="no" />
                <br />
                <label htmlFor="degree">Degree: </label>
                <select name="degree" id="degree">
                    <option value="bachelors">Bachelors</option>
                    <option value="bachelors">Masters</option>
                    <option value="bachelors">Certificate</option>
                </select>
                <br/>
                <button type="button">
                    Edit Entry <FiEdit3 />
                </button>
                <button type="button">
                    Delete Entry <FiTrash2 />
                </button>
            </div>
        )
    }
}
