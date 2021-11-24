import React, { Component } from 'react';
import { FiCheckCircle } from "react-icons/fi";
import { FiEdit3 } from "react-icons/fi";


export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            portfolio: "",
            linkedIn: "",
            github: "",
        };
        props.populateGeneral();
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //form validation
        //if no errors pass state object to app
        //pass state to populateGeneral method
        this.props.populateGeneral(this.state);
        //reset form
        this.resetForm();
    }

    resetForm = () => {
        const reset ={
            name: "",
            email: "",
            phone: "",
            portfolio: "",
            linkedIn: "",
            github: "",
        };
        this.setState(Object.assign(reset, this.state));
    }

    edit = () => {
        //get form data from state
        //update state to these values
        this.setState(Object.assign(this.props.general, this.state));
        //update form input values with state values
    }

	render() {
		return (
			<div className="general__info">
				<form action="" onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name: </label>
					<input
						onChange={this.handleInput}
						name="name"
						value={this.state.name}
						type="text"
					/>
					<label htmlFor="email">Email: </label>
					<input
						onChange={this.handleInput}
						name="email"
						value={this.state.email}
						type="email"
					/>
					<br />
					<label htmlFor="phone">Phone Number: </label>
					<input
						onChange={this.handleInput}
						name="phone"
						value={this.state.phone}
						type="telephone"
					/>
					<label htmlFor="portfolio">Portfolio: </label>
					<input
						onChange={this.handleInput}
						name="portfolio"
						value={this.state.portfolio}
						type="url"
						id=""
					/>
					<br />
					<label htmlFor="linkedIn">LinkedIn: </label>
					<input
						onChange={this.handleInput}
						name="linkedIn"
						value={this.state.linkedIn}
						type="url"
					/>
					<label htmlFor="github">Github: </label>
					<input
						onChange={this.handleInput}
						name="github"
						value={this.state.github}
						type="url"
					/>
					<br />
					<button type="button" onClick={this.edit}>
						Edit <FiEdit3 />
					</button>
					<button type="submit">
						Submit Section <FiCheckCircle />
					</button>
				</form>
			</div>
		);
	}
};



