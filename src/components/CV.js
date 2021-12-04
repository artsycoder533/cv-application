import React, { Component } from 'react';
import uniqid from "uniqid";
import {  FiArrowLeft } from "react-icons/fi";

export default class CV extends Component {
    render() {
        const { general, education, experience, skills, prevView } = this.props;
        const { name, email, phone, portfolio, linkedIn, github } = general;
       
        
    
        return (
          <div>
            <div className="general">
              <h1>{name}</h1>
              <hr />
              <span>{phone}</span> | <span>{email}</span> <br />
              <span>{portfolio}</span> | <span>{linkedIn}</span> |{" "}
              <span>{github}</span>
            </div>
            <div className="experience">
              <h4>Experience</h4>
                    <hr />
                    
              {experience.map((exp) => {
                const { title, company, startDate, endDate, employed, duties } =
                  exp;
                return (
                  <React.Fragment>
                    <h3>{title}</h3>
                    <p>{company}</p>
                    <span>{startDate}</span>

                    {employed === true ? (
                      <span> - Present</span>
                    ) : (
                      <span>{endDate}</span>
                    )}
                    <p>{duties}</p>
                  </React.Fragment>
                );
              })}
                    

            </div>
            <div className="education">
              <h4>Education</h4>
              <hr />
              {education.map((ed) => {
                const {
                  school,
                  major,
                  attending,
                  graduate,
                  degree,
                    startDate,
                  designation,
                  endDate,
                } = ed;
                return (
                  <React.Fragment>
                    <h3>{school}</h3>
                    <p>{major}</p>
                    
                      {graduate === "yes" ? (
                    
                          <h4>
                            {degree} of {designation} Graduated {endDate}
                          </h4>
                       
                      ) : attending === true ? (
                        <h4>{startDate} - Present</h4>
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
              <ul>
                {skills.map((skill) => {
                  return (
                    <React.Fragment>
                      <li>{skill}</li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
            <br />
            <button onClick={prevView}>
              <FiArrowLeft /> Go Back
            </button>
          </div>
        );
    }
}

//General Form
//Education 
//Experience
//Skills