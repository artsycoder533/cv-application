import React, { Component } from 'react'
import { Container, Step, StyledFiCheck } from './styles';
import { Circle } from './styles';
import { FiCheck } from "react-icons/fi";

export default class ProgressBar extends Component {
    state = {
        steps: [1, 2, 3, 4, 5],
    }
    render() {
        const { steps } = this.state;
        return (
            <Container>
                {steps.map(circle => {
                    return (
                      <Step>
                            <Circle><StyledFiCheck/></Circle>
                            <p>Step {circle}</p>
                      </Step>
                    );
                })}
          </Container>
        );
    }
}
