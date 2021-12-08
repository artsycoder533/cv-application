import React, { Component } from 'react';
import { StyledFooter } from './style';
import { StyledButton } from '../Button/style';
import { FiArrowRight, FiArrowLeft, FiSend } from "react-icons/fi";

export default class Footer extends Component {
    render() {
        const { prevView, nextView, view } = this.props;
        return (
          <StyledFooter>
            {view === 0 ? (
              ""
            ) : (
              <StyledButton onClick={prevView}>
                <FiArrowLeft /> Go Back
              </StyledButton>
            )}
            {view > 2 && view < 4 ? (
              <StyledButton onClick={nextView}>
                Generate <FiSend />
              </StyledButton>
            ) : view > 3 ? "" : (
              <StyledButton onClick={nextView}>
                Next <FiArrowRight />
              </StyledButton>
            )}
          </StyledFooter>
        );
    }
}
