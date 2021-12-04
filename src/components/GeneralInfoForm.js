import React, { Component } from "react";
import { FiArrowRight } from "react-icons/fi";
import uniqid from "uniqid";
import DisplayInput from "./DisplayInput";

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);

    //equal to this props.general
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

  //label, name, value
  displayInput = (label, name, value, type) => {
    return (
      <React.Fragment key={uniqid()}>
        <label htmlFor="name">{label}</label>
        <br />
        <input
          onChange={this.handleInput}
          name={name}
          value={value}
          type={type}
          placeholder={name}
        />
        <br />
        <br />
      </React.Fragment>
    );
  };

  render() {
    const { name, email, phone, portfolio, github, linkedIn } =
      this.props.general;
    const { nextView } = this.props;
    const { general } = this.state;

    return (
      <div className="general__info">
        <h2>General Info</h2>
        <br />
        <form action="" onSubmit={this.handleSubmit}>
          <DisplayInput
            label="Name"
            name="name"
            value={name}
            type="text"
            handleInput={this.handleInput}
            placeholder={name}
            key={uniqid}
          />
          <br />
          <br />
          <DisplayInput
            label="Email"
            name="email"
            value={email}
            type="email"
            handleInput={this.handleInput}
            placeholder={email}
          />
          <br />
          <br />
          <DisplayInput
            label="Phone"
            name="phone"
            value={phone}
            type="phone"
            handleInput={this.handleInput}
            placeholder={phone}
          />
          <br />
          <br />
          <DisplayInput
            label="Portfolio"
            name="portfolio"
            value={portfolio}
            type="text"
            handleInput={this.handleInput}
            placeholder={portfolio}
          />
          <br />
          <br />
          <DisplayInput
            label="LinkedIn"
            name="linkedIn"
            value={linkedIn}
            type="text"
            handleInput={this.handleInput}
            placeholder={linkedIn}
          />
          <br />
          <br />
          <DisplayInput
            label="Github"
            name="github"
            value={github}
            type="text"
            handleInput={this.handleInput}
            placeholder={github}
          />
          <br />
          <br />
          <button onClick={nextView}>
            Next <FiArrowRight />
          </button>
        </form>
      </div>
    );
  }
}

export default GeneralInfoForm;
