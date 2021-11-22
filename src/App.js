import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";
import SectionButtons from "./components/SectionButtons";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./App.css";
import GeneralPreview from "./components/GeneralPreview";

class App extends Component {
    render() {
		return (
			<section className="App">
				<article className="cv">
					<h1>CV Application</h1>
					<General />
					<Education />
					<br />
					<SectionButtons />
					<Experience />
					<br />
					<SectionButtons />
					<Skills />
					<SectionButtons />
				</article>
				<article className="preview">
					<h1>CV Preview</h1>
					<GeneralPreview />
				</article>
			</section>
		);
    }
}

export default App;
