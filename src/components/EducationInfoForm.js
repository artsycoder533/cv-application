import React, { Component } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import DisplayInput from "./DisplayInput";
import DisplayRadio from "./DisplayRadio";
import DisplayCheckbox from "./DisplayCheckbox";
import DisplaySelect from "./DisplaySelect";
import uniqid from "uniqid";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default class EducationInfoForm extends Component {
  constructor(props) {
    super(props);
      console.log(props.education.graduate);
    this.state = {
      education: this.props.education,
      degreeLevel: ["Bachelors", "Masters", "Certificate", "Doctorate"],
        view: this.props.view,
        graduate: ""
    };
  }

  handleInput = (e, index) => {
    console.log(e.currentTarget.name, index);
    const { currentTarget: input } = e;
    const copyOfState = { ...this.state };
    const { education } = copyOfState;

    let entry = education[index];
    //if input type is a checkbox
    input.type === "checkbox"
      ? (entry[input.name] = input.checked)
          : (entry[input.name] = input.value);
      //if input type is radio
      if (input.type === "radio") {
          entry.graduate = input.value;
      }
    this.setState(copyOfState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.populateEducation(this.state.entry);
    this.resetForm();
  };

  resetForm = () => {
    const reset = {
      school: "",
      major: "",
      startDate: "",
      endDate: "",
      attending: false,
      degree: "",
      id: uniqid(),
    };
    this.setState(Object.assign(reset, this.state.education[0]));
  };

//   save = () => {
//     console.log(this.state.entry);
//     this.setState({
//       education: [this.state.entry, ...this.state.education],
//     });
//     this.resetForm();
//     console.log(this.state.education);
//     //add new array to the end of the array, reset first element of array
//   };

//   edit = (id) => {
//     //get the education array, go find the
//     const educationCopy = [...this.props.education];
//     educationCopy.find((entry) => {
//       return entry.id === this.state.education[0].id;
//     });
//     this.setState(Object.assign(this.props));
//   };

  delete = (index) => {
    const copyOfState = { ...this.state };
    const { education } = copyOfState;
    education.splice(index, 1);
    this.setState(copyOfState);
  };

  addNewEntry = () => {
    const copyOfState = { ...this.state };
    const { education } = copyOfState;
    education.push({
      school: "",
      major: "",
      startDate: "",
      endDate: "",
      attending: "",
        graduate: "",
      degree: "",
      id: uniqid(),
    });
    this.setState(copyOfState);
  };

  render() {
    const { nextView, prevView, education } = this.props;
    
    return (
      <div className="education__info">
        <h2>Education Info</h2>
        <form action="" onSubmit={this.handleSubmit}>
          {education.map((entry, index) => {
            const {
              school,
              major,
              startDate,
              endDate,
              attending,
              graduate,
              degree,
              id,
            } = entry;

            return (
              <React.Fragment key={index}>
                <DisplayInput
                  label="School"
                  name="school"
                  value={school}
                  type="text"
                  handleInput={this.handleInput}
                  placeholder={school}
                  index={index}
                  id={id}
                />
                <DisplayInput
                  label="Major"
                  name="major"
                  value={major}
                  type="text"
                  handleInput={this.handleInput}
                  placeholder={major}
                  index={index}
                  id={id}
                />

                <DisplayCheckbox
                  label="Still attending"
                  name="attending"
                  value={attending}
                  handleInput={this.handleInput}
                  index={index}
                  id={id}
                />
                <DisplayInput
                  label="Date Started"
                  name="startDate"
                  value={startDate}
                  type="date"
                  handleInput={this.handleInput}
                  index={index}
                  id={id}
                />
                <br />
                <DisplayInput
                  label="Date Ended"
                  name="endDate"
                  value={endDate}
                  type="date"
                  handleInput={this.handleInput}
                  index={index}
                  id={id}
                />
                <br />
                <span>Did you graduate?</span>
                <DisplayRadio
                  label="Yes"
                  name={`graduate${index}`}
                  graduate={graduate}
                  handleInput={this.handleInput}
                  index={index}
                  id={id}
                />
                <DisplaySelect
                  label={"Degree"}
                  value={degree}
                  name={"degree"}
                  handleInput={this.handleInput}
                  index={index}
                  id={id}
                />

                <br />
                <div key={id}>
                  <button type="button" onClick={() => this.delete(index)}>
                    Delete Entry <FiTrash2 />
                  </button>
                  <br />
                  <br />
                </div>
              </React.Fragment>
            );
          })}
        </form>
        <button type="button" onClick={() => this.addNewEntry()}>
          Add Entry <FiPlus />
        </button>
        <br />
        <br />
        <button onClick={prevView}>
          Prev <FiArrowLeft />
        </button>
        <button onClick={nextView}>
          Next <FiArrowRight />
        </button>
      </div>
    );
  }
}


