import React, { Component } from 'react';
import { FiPlus } from "react-icons/fi";
import DisplayInput from '../DisplayInput/DisplayInput';
import DisplayCheckbox from '../DisplayCheckbox/DisplayCheckbox';
import DisplayTextarea from '../DisplayTextArea/DisplayTextarea';
import uniqid from "uniqid";
import { StyledFormWithScroll } from '../Form/style';
import { AbsoluteIconButton, StyledTrashIcon, AbsoluteTrashButton } from '../Button/style';
import { Container, EntryWrapper, FormWrapper } from './style';
import { StyledTitle } from '../Title/style';
import { StyledAddIcon } from '../EducationInfo/style';

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
    input.type === "checkbox"
      ? (entry[input.name] = input.checked)
          : (entry[input.name] = input.value);

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
    const { experience } = this.props;
    
    return (
      <Container>
        <StyledTitle>Experience</StyledTitle>
        <FormWrapper>
          <StyledFormWithScroll action="">
            {experience.map((entry, index) => {
              const {
                title,
                company,
                startDate,
                endDate,
                employed,
                duties,
                id,
              } = entry;
              return (
                <EntryWrapper key={id}>
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
                  <DisplayCheckbox
                    label="Check if still employed"
                    name="employed"
                    value={employed}
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
                  {employed ? (
                    ""
                  ) : (
                    <React.Fragment>
                      <DisplayInput
                        label="Date Ended"
                        name="endDate"
                        value={endDate}
                        type="date"
                        handleInput={this.handleInput}
                        index={index}
                        id={id}
                      />
                    </React.Fragment>
                  )}
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
           <StyledAddIcon />
        </AbsoluteIconButton>
      </Container>
    );
  }
}
