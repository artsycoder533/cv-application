import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
// import SectionButtons from "./components/SectionButtons";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";
import GeneralPreview from "./components/GeneralPreview";


class App extends Component {
	general = {};
	education = [];
	experience = [];
	skills = [];

	constructor(props) {
		super(props);

		this.state = {
			general: {},
			education: [],
			experience: [
				// {
				// 	title: "",
				// 	company: "",
				// 	startDate: "",
				// 	endDate: "",
				// 	employed: "no",
				// 	duties: "",
				// },
			],
			skills: [],
		};
	}

	previewCV = () => {
		
	};

	populateGeneral = (data) => {
		//gets state data from general info as parameter
		//updates data in general state
		this.setState(Object.assign(this.state.general, data));
	};
	populateEducation = () => {
		return this.state.education;
	};
	populateExperience = () => {
		return this.state.experience;
	};
	populateSkills = () => {
		return this.state.skills;
	};

    render() {
		return (
			<section className="App">
				<article className="cv">
					<h1>CV Application</h1>
					<General populateGeneral={this.populateGeneral} general={this.state.general}/>
					<Education populateEducation={this.populateEducation} education={this.state.education}/>
					<br />
					<Experience />
					<br />
					{/* <SectionButtons /> */}
					<Skills />
					{/* <SectionButtons general={this.populateGeneral}/> */}
				</article>
				<article className="preview">
					<h1>CV Preview</h1>
					<button type="button" onClick={this.previewCV}>Preview Resume</button>
					<GeneralPreview general={this.state.general}/>
				</article>
			</section>
		);
    }
}


export default App;
