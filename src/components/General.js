import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import { FiCheckCircle } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";

export default class General extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            portfolio: "",
            linkedIn: "",
            github: "",
        }
    }

    getInfo = (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target)
    }
    render() {
        return (
            <div className="general">
                <form onSubmit={this.getInfo} action="">
                    <h2>General Info</h2>
                    <GeneralInfo />
                    <button>
                        Edit <FiEdit3/>
                    </button>
                    <button type="submit">
                        Submit Section <FiCheckCircle />
                    </button>
                </form>
            </div>
        );
    }
}
