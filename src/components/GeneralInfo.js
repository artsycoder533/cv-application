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
	}

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //form validation
        //reset form
        console.log(this.state);
        e.target.reset();
    }

	render() {
		return (
			<div className="general__info">
				<form action="" onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name: </label>
					<input onChange={this.handleInput} name="name" type="text" />
					<label htmlFor="email">Email: </label>
					<input onChange={this.handleInput} name="email" type="email" />
					<br />
					<label htmlFor="phone">Phone Number: </label>
					<input onChange={this.handleInput} name="phone" type="telephone" />
					<label htmlFor="portfolio">Portfolio: </label>
					<input
						onChange={this.handleInput}
						name="portfolio"
						type="url"
						id=""
					/>
					<br />
					<label htmlFor="linkedIn">LinkedIn: </label>
					<input onChange={this.handleInput} name="linkedIn" type="url" />
					<label htmlFor="github">Github: </label>
                    <input onChange={this.handleInput} name="github" type="url" />
					<button>
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



