import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";
// import ResumeForm from "./components/ResumeForm";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import ExperienceInfoForm from "./components/ExperienceInfoForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "",
        email: "",
        phone: "",
        portfolio: "",
        linkedIn: "",
        github: "",
      },
      education: [
        {
          school: "",
          major: "",
          startDate: "",
          endDate: "",
          attending: "",
          graduate: "",
          degree: "",
          id: uniqid(),
        },
      ],
      experience: [
        {
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          employed: "",
          duties: "",
          id: uniqid(),
        },
      ],
      //   educationList: [],
      //   experiencesList: [],
      //   skillsList: [],
      view: 2,
    };
  }

  generateCV = () => {};

  addGeneralInfo = (generalInfo) => {
    const copyOfState = this.state;
    const { general } = copyOfState;
    Object.assign(general, generalInfo);
    this.setState(copyOfState);
  };

  addEducation = () => {};
  addExperience = () => {};
  addSkills = () => {};

  nextView = (e) => {
    e.preventDefault();
    const copyOfState = { ...this.state };
    copyOfState.view++;
    this.setState(copyOfState);
  };

  prevView = (e) => {
    e.preventDefault();
    console.log("prev");
    const copyOfState = { ...this.state };
    copyOfState.view--;
    this.setState(copyOfState);
  };

  //reset = () => {};

  render() {
    const { view, id } = this.state;
    return (
      <section className="App">
        <article className="cv">
          <h1>CV Application</h1>
          {view === 0 ? (
            <GeneralInfoForm
              general={this.state.general}
              nextView={this.nextView}
              addNewEntry={this.addNewEntry}
            />
          ) : view === 1 ? (
            <div>
              <EducationInfoForm
                education={this.state.education}
                nextView={this.nextView}
                prevView={this.prevView}
              />
            </div>
          ) : view === 2 ? (
            <div>
              <ExperienceInfoForm
                nextView={this.nextView}
                prevView={this.prevView}
                experience={this.state.experience}
              />
            </div>
          ) : (
            ""
          )}
        </article>
      </section>
    );
  }
}

export default App;

{
  /* <article className="preview">
					<h1>CV Preview</h1>
					<button type="button" onClick={this.previewCV}>Preview Resume</button>
					<GeneralPreview general={this.state.general} />
					<EducationPreview educationList={this.state.educationList} />
				</article> */
}
