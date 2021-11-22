import React, { Component } from 'react';
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default class SkillsInfo extends Component {
    render() {
        return (
            <div>
                <label htmlFor="skill">Skill: </label>
                <input type="text" />
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
