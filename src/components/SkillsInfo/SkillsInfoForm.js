import React, { Component } from "react";
import { FiTrash2, FiPlus} from "react-icons/fi";
import DisplayInput from "../DisplayInput/DisplayInput";
import uniqid from "uniqid";
import { StyledForm,  } from "../Form/style";
import { StyledTitle } from "../Title/style";
import {
  Container,
  FormWrapper,
  SkillsForm,
  StyledFormWithScroll,
} from "./style";
import { AbsoluteIconButton, AbsoluteSkillsTrashButton, AbsoluteTrashButton, IconButton, PlainButton, StyledTrashIcon } from "../Button/style";
import { EntryWrapper } from "./style";
import { StyledAddIcon } from "../EducationInfo/style";

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
    const { skills} = this.props;

    return (
      <Container>
        <StyledTitle>Skills</StyledTitle>
        <FormWrapper>
          <SkillsForm>
            {skills.length < 1 ? (
              <h4>No skills added, press "Add Entry to add a skill"</h4>
            ) : (
              skills.map((skill, index) => {
                return (
                  <EntryWrapper key={index}>
                    <DisplayInput
                      label="Skill"
                      name="skill"
                      value={skill}
                      handleInput={this.handleInput}
                      index={index}
                    />
                    <AbsoluteSkillsTrashButton
                      type="button"
                      onClick={() => this.delete(index)}>
                      <StyledTrashIcon />
                    </AbsoluteSkillsTrashButton>
                  </EntryWrapper>
                );
              })
            )}
          </SkillsForm>
        </FormWrapper>
        <AbsoluteIconButton type="button" onClick={() => this.addNewEntry()}>
           <StyledAddIcon />
        </AbsoluteIconButton>
      </Container>
    );
  }
}
