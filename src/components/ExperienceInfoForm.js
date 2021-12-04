import React, { Component } from 'react';
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiArrowRight, FiArrowLeft, FiPlus } from "react-icons/fi";
import DisplayInput from "./DisplayInput";
import DisplayRadio from "./DisplayRadio";
import DisplayCheckbox from "./DisplayCheckbox";
import DisplaySelect from "./DisplaySelect";
import DisplayTextarea from './DisplayTextarea';
import uniqid from "uniqid";

export default class ExperienceInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        experience: this.props.experience,
    };
  }

  handleInput = (e, index) => {
    const { currentTarget: input } = e;
    const copyOfState = { ...this.state };
    const { experience } = copyOfState;

    let entry = experience[index];
    //if input type is a checkbox
    input.type === "checkbox"
      ? (entry[input.name] = input.checked)
          : (entry[input.name] = input.value);
 
    // //if input type is radio
    // if (input.type === "radio") {
    //   entry.graduate = input.value;
    // }
    this.setState(copyOfState);
  };

  delete = (index) => {
    const copyOfState = { ...this.state };
    const { experience } = copyOfState;
    experience.splice(index, 1);
    this.setState(copyOfState);
  };

  addNewEntry = () => {
    const copyOfState = { ...this.state };
    const { experience } = copyOfState;
    experience.push({
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      employed: "",
      duties: "",
      id: uniqid(),
    });
    this.setState(copyOfState);
  };

  render() {
    const { prevView, nextView, experience } = this.props;
    // const { title, company, startDate, endDate, employed, duties, id } = experience;
    return (
      <div className="experience__info">
        <h2>Experience</h2>
        <form action="">
          {experience.map((entry, index) => {
            const { title, company, startDate, endDate, employed, duties, id } =
              entry;
            return (
              <React.Fragment key={id}>
                <DisplayInput
                  label="Job Title"
                  name="title"
                  value={title}
                  type="text"
                  handleInput={this.handleInput}
                  placeholder={title}
                  index={index}
                  id={id}
                />
                <DisplayInput
                  label="Company"
                  name="company"
                  value={company}
                  type="text"
                  handleInput={this.handleInput}
                  placeholder={company}
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
                {employed ? (
                  <DisplayInput
                    label="Date Ended"
                    name="endDate"
                    value={endDate}
                    type="date"
                    handleInput={this.handleInput}
                    index={index}
                    id={id}
                    disabled={true}
                  />
                ) : (
                  <DisplayInput
                    label="Date Ended"
                    name="endDate"
                    value={endDate}
                    type="date"
                    handleInput={this.handleInput}
                    index={index}
                    id={id}
                  />
                )}

                <DisplayCheckbox
                  label="Still Employed?"
                  name="employed"
                  value={employed}
                  handleInput={this.handleInput}
                  index={index}
                  id={id}
                />
                <DisplayTextarea
                  type={"textarea"}
                  label={"Duties"}
                  value={duties}
                  name="duties"
                  cols={30}
                  rows={10}
                  index={index}
                  handleInput={this.handleInput}
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
        <br />
        <button type="button" onClick={() => this.addNewEntry()}>
          Add Entry <FiPlus />
        </button>
        <br />
        <br />
        <button onClick={prevView}>
          <FiArrowLeft /> Go Back
        </button>
        <button onClick={nextView}>
          Next <FiArrowRight />
        </button>
      </div>
    );
  }
}
