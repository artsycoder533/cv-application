import React, { Component } from "react";
import General from "./components/General";
import Education from "./components/Education";

class App extends Component {
  render() {
    return (
			<div className="App">
				<h1>CV Application</h1>
				<General />
				<Education />
			</div>
		);
  }
}

export default App;
