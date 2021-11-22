import React, { Component } from 'react';
import { FiCheckCircle } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default class GeneralInfo extends Component {
    render() {
        return (
            <div className="general__info">
                <label htmlFor="name">Name: </label>
                <input type="text" />
                <label htmlFor="email">Email: </label>
                <input type="email" />
                <br />
                <label htmlFor="phone">Phone Number: </label>
                <input type="telephone" />
                <label htmlFor="portfolio">Portfolio: </label>
                <input type="url" name="" id="" />
                <br />
                <label htmlFor="linkedIn">LinkedIn: </label>
                <input type="url" />
                <label htmlFor="github">Github: </label>
                <input type="url" />
                <br />
                <button type="button">Delete Entry <FiTrash2 /></button>
                <button type="button">
                    Edit Entry <FiEdit3 />
                </button>
                <button type="submit">
                    Submit Entry <FiCheckCircle />
                </button>
            </div>
        )
    }
}
