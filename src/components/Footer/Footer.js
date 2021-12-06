import React, { Component } from 'react';
import { StyledFooter } from './style';
import { StyledButton } from '../Button/style';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default class Footer extends Component {
    render() {
        const { prevView, nextView } = this.props;
        return (
          <StyledFooter>
            <StyledButton onClick={prevView}>
              <FiArrowLeft /> Go Back
            </StyledButton>
            <StyledButton onClick={nextView}>
              Next <FiArrowRight />
            </StyledButton>
          </StyledFooter>
        );
    }
}
