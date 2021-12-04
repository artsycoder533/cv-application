import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import ExperienceInfoForm from "./components/ExperienceInfoForm";
import SkillsInfoForm from "./components/SkillsInfoForm";
import CV from "./components/CV";

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
          designation: "",
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
      skills: [""],
      view: 0,
    };
  }

  generateCV = () => {
    const copyOfState = { ...this.state };
    copyOfState.view++;
    this.setState(copyOfState);
  };

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

  render() {
    const { view } = this.state;
    return (
      <section className="App">
        <article className="builder">
          {/* <h1>CV Application</h1> */}
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
          ) : view === 3 ? (
            <div>
              <SkillsInfoForm
                skills={this.state.skills}
                prevView={this.prevView}
              />
              <br />
              <button type="button" onClick={() => this.generateCV()}>
                Generate CV
              </button>
            </div>
          ) : (
            <div className="cv">
              <CV
                general={this.state.general}
                education={this.state.education}
                experience={this.state.experience}
                skills={this.state.skills}
                prevView={this.prevView}
              />
            </div>
          )}
        </article>
      </section>
    );
  }
}

export default App;
