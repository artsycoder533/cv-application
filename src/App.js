import React, { Component } from "react";
import "./App.css";
import uniqid from "uniqid";
import GeneralInfoForm from "./components/GeneralInfo/GeneralInfoForm";
import EducationInfoForm from "./components/EducationInfo/EducationInfoForm";
import ExperienceInfoForm from "./components/ExperienceInfo/ExperienceInfoForm";
import SkillsInfoForm from "./components/SkillsInfo/SkillsInfoForm";
import CV from "./components/CV/CV";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./components/ReactToPrint/ComponentToPrint";
import { DownloadButton, PlainButton } from "./components/Button/style";

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
          gpa: "",
          minor: "",
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
    const copyOfState = { ...this.state };
    copyOfState.view--;
    this.setState(copyOfState);
  };

  render() {
    const { view } = this.state;
    return (
      <section className="App">

        <Header view={view} className="hide" />
        {view > 4 ? "" : <ProgressBar view={view}/>}

        {/* <ReactToPrint
          trigger={() => {
            return <DownloadButton>Download PDF</DownloadButton>;
          }}
          content={() => this.componentRef}
        /> */}
        <article className="builder">
          {view === 0 ? (
            <GeneralInfoForm
              general={this.state.general}
              addNewEntry={this.addNewEntry}
            />
          ) : view === 1 ? (
            <div>
              <EducationInfoForm education={this.state.education} />
            </div>
          ) : view === 2 ? (
            <div>
              <ExperienceInfoForm experience={this.state.experience} />
            </div>
          ) : view === 3 ? (
            <div>
              <SkillsInfoForm skills={this.state.skills} />
            </div>
          ) : (
            <div className="cv">
              <CV
                general={this.state.general}
                education={this.state.education}
                experience={this.state.experience}
                skills={this.state.skills}
                ref={(el) => (this.componentRef = el)}
              />
            </div>
          )}
        </article>
          <Footer
            className="hide"
            prevView={this.prevView}
            nextView={this.nextView}
            view={this.state.view}
            generateCV={this.generateCV}
          />
      
      </section>
    );
  }
}

export default App;
