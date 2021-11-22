import React, { Component } from 'react';
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default class ExperienceInfo extends Component {
    render() {
        return (
            <div className="experience__info">
                <label htmlFor="title">Job Title: </label>
                <input type="text" />
                <label htmlFor="company">Company Name: </label>
                <input type="text" />
                <br />
                <label htmlFor="dateStarted">Date Started: </label>
                <input type="date" />
                <label htmlFor="dateEnded">Date Ended: </label>
                <input type="date" />
                <br/>
                <label htmlFor="current">Are you still employed there? </label>
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="yes" id="yes" />
                <label htmlFor="no">No</label>
                <input type="radio" name="no" id="no" />
                <br />
                <label htmlFor="duties">Job Duties: </label>
                <br/>
                <textarea name="duties" id="duties" cols="30" rows="10"></textarea>
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
