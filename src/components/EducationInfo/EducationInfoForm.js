import React, { Component } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import DisplayInput from "../DisplayInput/DisplayInput";
import DisplayRadio from "../DisplayRadio/DisplayRadio";
import DisplayCheckbox from "../DisplayCheckbox/DisplayCheckbox";
import DisplaySelect from "../DisplaySelect/DisplaySelect";
import { AbsoluteIconButton, AbsoluteTrashButton, IconButton, StyledTrashIcon } from "../Button/style";
import uniqid from "uniqid";
import { ButtonWrapper, Container, EntryWrapper } from "./style";
import { EducationForm, StyledForm, StyledFormWithScroll} from "../Form/style";
import { StyledTitle } from "../Title/style";
import { FormWrapper } from "./style";

export default class EducationInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: this.props.education,
      degreeOptions: ["Bachelors", "Masters", "Certificate", "Doctorate"],
      designationOptions: ["Science", "Arts"],
      view: this.props.view,
      //graduate: ""
    };
  }

  handleInput = (e, index) => {
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
    //if attending, unselect radio
    input.type === "checkbox"
      ? (entry["graduate"] = "No") 
      : (entry["graduate"] = input.value);
    
    //if graduated, unselect attending
    input.type === "radio" && entry["graduate"] === "Yes" 
      ? (entry["attending"] = "")
      : (entry["attending"] = input.value);
    this.setState(copyOfState);
  };

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
      designation: "",
      degree: "",
      id: uniqid(),
    });
    this.setState(copyOfState);
  };

  render() {
    const { education } = this.props;
    const { degreeOptions, designationOptions } = this.state;

    return (
      <Container>
        <StyledTitle>Education</StyledTitle>
        <FormWrapper>
        <StyledFormWithScroll action="" onSubmit={this.handleSubmit} className="education_form">
          {education.map((entry, index) => {
            const {
              school,
              major,
              startDate,
              endDate,
              attending,
              graduate,
              designation,
              degree,
              id,
            } = entry;

            return (
              <EntryWrapper key={id}>
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
                  label="Check if still attending"
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
                {attending === true ? (
                  ""
                ) : (
                  <React.Fragment>
                    {" "}
                    <DisplayInput
                      label="Date Ended"
                      name="endDate"
                      value={endDate}
                      type="date"
                      handleInput={this.handleInput}
                      index={index}
                      id={id}
                    />
                    <div className="radios">
                      <DisplayRadio
                        label="Yes"
                        name={`graduate${index}`}
                        graduate={graduate}
                        handleInput={this.handleInput}
                        index={index}
                        id={id}
                      />
                    </div>
                    {graduate === "Yes" ? (
                      <div>
                        <DisplaySelect
                          label={"Degree"}
                          value={degree}
                          name={"degree"}
                          handleInput={this.handleInput}
                          options={degreeOptions}
                          index={index}
                          id={id}
                        />
                        <DisplaySelect
                          label={"Designation"}
                          value={designation}
                          name={"designation"}
                          handleInput={this.handleInput}
                          options={designationOptions}
                          index={index}
                          id={id}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                )}
                {index === 0 ? (
                  ""
                ) : (
                  <AbsoluteTrashButton
                    type="button"
                    onClick={() => this.delete(index)}>
                    <StyledTrashIcon />
                  </AbsoluteTrashButton>
                )}
              </EntryWrapper>
            );
          })}
        </StyledFormWithScroll>
       </FormWrapper>
        <AbsoluteIconButton type="button" onClick={() => this.addNewEntry()}>
          Add Entry <FiPlus />
        </AbsoluteIconButton>
      </Container>
    );
  }
}