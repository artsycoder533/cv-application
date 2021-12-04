import React, { Component } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2, FiPlus, FiArrowLeft } from "react-icons/fi";
import DisplayInput from "./DisplayInput";
import uniqid from "uniqid";

export default class SkillsInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: this.props.skills,
    };
  }
  handleInput = (e, index) => {
    e.preventDefault();
    const copyOfState = { ...this.state };
    const { skills } = copyOfState;
    const { currentTarget: input } = e;
    skills[index] = input.value;
    this.setState(copyOfState);
  };

  delete = (index) => {
    const copyOfState = { ...this.state };
    const { skills } = copyOfState;
    skills.splice(index, 1);
    this.setState(copyOfState);
  };

  addNewEntry = () => {
    let copyOfState = { ...this.state };
    const { skills } = this.state;
    skills.push("");

    this.setState(copyOfState);
  };
  render() {
    const { skills, prevView } = this.props;

    return (
      <div className="skills__info">
        <h2>Skills</h2>
        <br />
        <form>
          {skills.length < 1 ? (
            <h4>No skills added, press "Add Entry to add a skill"</h4>
          ) : (
            skills.map((skill, index) => {
              return (
                <React.Fragment key={index}>
                  <DisplayInput
                    label="Skill"
                    name="skill"
                    value={skill}
                    handleInput={this.handleInput}
                    index={index}
                  />
                  <button type="button" onClick={() => this.delete(index)}>
                    Delete Entry <FiTrash2 />
                  </button>
                  <br />
                  <br />
                </React.Fragment>
              );
            })
          )}
          <br />
          <br />
          <button type="button" onClick={() => this.addNewEntry()}>
            Add Entry <FiPlus />
          </button>
        </form>
        <br />
        <button onClick={prevView}>
          <FiArrowLeft /> Go Back
        </button>
      </div>
    );
  }
}
