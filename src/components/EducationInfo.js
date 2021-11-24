import React, { Component } from 'react';
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default class EducationInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: "",
            major: "",
            startDate: "",
            endDate: "",
            attending: "no",
            degree: "",
        }
    }
    
    handleInput = (e) => {

    }

    handleSubmit = (e) => {

    }

    resetForm = () => {

    }

    edit = (id) => {

    }

    delete = () => {
        
    }

    render() {
        return (
            <div className="education__info">
                <label htmlFor="school">School: </label>
                <input
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.school}
                    name="name" />
                <label htmlFor="major">Major: </label>
                <input
                    type="text"
                    onChange={this.handleInput}
                    value={this.state.major}
                    name="major" />
                <br />
                <label htmlFor="startDate">Date Started: </label>
                <input
                    type="date"
                    onChange={this.handleInput}
                    value={this.state.startDate}
                    name="startDate" />
                <label htmlFor="graduationDate">Date Ended:</label>
                <input
                    type="date"
                    onChange={this.handleInput}
                    value={this.state.endDate}
                    name="endDate"/>
                <br />
                <label htmlFor="current">Are you still attending? </label>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="yes" id="yes" />
                <label htmlFor="no">No</label>
                <input type="radio" name="no" id="no" />
                <br />
                <label htmlFor="degree">Degree: </label>
                <select name="degree" id="degree" onChange={this.handleInput}>
                    <option value="bachelors">Bachelors</option>
                    <option value="bachelors">Masters</option>
                    <option value="bachelors">Certificate</option>
                </select>
                <br/>
                <button type="button" onClick={this.edit}>
                    Edit Entry <FiEdit3 />
                </button>
                <button type="button" onClick={this.delete}>
                    Delete Entry <FiTrash2 />
                </button>
            </div>
        )
    }
}
