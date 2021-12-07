import React, { Component } from "react";
import uniqid from "uniqid";
import DisplayInput from "../DisplayInput/DisplayInput";
import { StyledForm } from "../Form/style";
import { Container, EntryWrapper, FormWrapper, GeneralForm } from "./style";
import { StyledTitle } from "../Title/style";

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: this.props.general,
      id: uniqid(),
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    const { currentTarget: input } = e;
    console.log(input.value);
    const copyOfState = { ...this.state };
    const { general } = copyOfState;
    general[input.name] = input.value;
    this.setState(copyOfState);
  };

  resetForm = () => {
    const reset = {
      name: "",
      email: "",
      phone: "",
      portfolio: "",
      linkedIn: "",
      github: "",
      id: uniqid(),
    };
    this.setState(Object.assign(reset, this.state));
  };

  edit = () => {
    //update form input values with state values
    this.setState(Object.assign(this.props.general, this.state));
  };

  render() {
    const { name, email, phone, portfolio, github, linkedIn } =
      this.props.general;

    return (
      <Container>
        <StyledTitle>General Info</StyledTitle>
        <FormWrapper>
          <GeneralForm
            action=""
            onSubmit={this.handleSubmit}
            className="general__form">
            <EntryWrapper>
            <DisplayInput
              label="Name"
              name="name"
              value={name}
              type="text"
              handleInput={this.handleInput}
              placeholder="enter name"
              key={uniqid}
            />
            <DisplayInput
              label="Email"
              name="email"
              value={email}
              type="email"
              handleInput={this.handleInput}
              placeholder="email@email.com"
            />
            <DisplayInput
              label="Phone"
              name="phone"
              value={phone}
              type="tel"
              handleInput={this.handleInput}
              placeholder="555-555-5555"
            />
            <DisplayInput
              label="Portfolio"
              name="portfolio"
              value={portfolio}
              type="text"
              handleInput={this.handleInput}
              placeholder="www or http(s)"
            />
            <DisplayInput
              label="LinkedIn"
              name="linkedIn"
              value={linkedIn}
              type="text"
              handleInput={this.handleInput}
              placeholder="www or http(s)"
            />
            <DisplayInput
              label="Github"
              name="github"
              value={github}
              type="text"
              handleInput={this.handleInput}
              placeholder="www or http(s)"
            />
            </EntryWrapper>
          </GeneralForm>
        </FormWrapper>
      </Container>
    );
  }
}

export default GeneralInfoForm;
