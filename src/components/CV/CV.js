import React, { Component } from "react";
import uniqid from "uniqid";
import {
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { Container, StyledTitle, StyledSectionTitle, JobDate, HeaderSection, List, JobTitle, Description } from "./style";

import { DownloadButton } from "../Button/style";

export default class CV extends Component {
  render() {
    const { general, education, experience, skills} = this.props;
    const { name, email, phone, portfolio, linkedIn, github } = general;
    console.log(this.props);
    return (
      <Container className="cv">
        <StyledTitle>{name}</StyledTitle>
        <br />
        <HeaderSection >
          <span>
            <FiPhone /> {phone}
          </span>{" "}
          |{" "}
          <span>
            <FiMail /> {email}
          </span>{" "}
          |{" "}
          <span>
            <FiExternalLink /> {portfolio}
          </span>{" "}
          |{" "}
          <span>
            {" "}
            <FiLinkedin /> {linkedIn}
          </span>{" "}
          |{" "}
          <span>
            <FiGithub /> {github}
          </span>
        </HeaderSection>
        <div className="experience">
          <hr />
          <StyledSectionTitle>Experience</StyledSectionTitle>
          <hr />

          {experience.map((exp) => {
            const { title, company, startDate, endDate, employed, duties } =
              exp;
            console.log(startDate);
            return (
              <React.Fragment>
                <JobTitle>{title}</JobTitle>
                <JobDate>
                  <span>{company}</span>

                  {employed === true ? (
                    <span>{startDate} - Present</span>
                  ) : (
                    <span>
                      {startDate} - {endDate}
                    </span>
                  )}
                </JobDate>
                <Description>{duties}</Description>
              </React.Fragment>
            );
          })}
        </div>
        <div className="education">
          <hr />
          <StyledSectionTitle>Education</StyledSectionTitle>
          <hr />
          {education.map((ed) => {
            const {
              school,
              major,
              attending,
              graduate,
              degree,
              gpa,
              startDate,
              designation,
              endDate,
            } = ed;
            return (
              <React.Fragment>
                <JobTitle>{school}</JobTitle>
                {graduate === "Yes" ? (
                  <JobDate>
                    <span>
                      {degree} of {designation}, {major}
                    </span>{" "}
                    <span>Graduated {endDate}</span>{" "}
                  </JobDate>
                ) : attending === true ? (
                  <JobDate>
                      <span>Majoring in {major}, Current GPA {gpa}</span>
                    <span>{startDate} - Present</span>
                  </JobDate>
                ) : (
                  <h4>
                    {startDate} - {endDate}
                  </h4>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="skills">
          <hr />
          <StyledSectionTitle>Skills</StyledSectionTitle>
          <hr />
          <List>
            {skills.map((skill) => {
              return (
                <React.Fragment>
                  <li>{skill.toUpperCase()}</li>
                </React.Fragment>
              );
            })}
          </List>
        </div>
      </Container>
    );
  }
}

//General Form
//Education
//Experience
//Skills
