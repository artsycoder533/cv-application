import React, { Component } from 'react';
import { StyledFooter, StyledLeftIcon, StyledRightIcon, StyledSendIcon } from './style';
import { StyledButton } from '../Button/style';

export default class Footer extends Component {
    render() {
        const { prevView, nextView, view } = this.props;
        return (
          <StyledFooter>
            {view === 0 ? (
              ""
            ) : (
              <StyledButton onClick={prevView}>
                <StyledLeftIcon />
              </StyledButton>
            )}
            {view > 2 && view < 4 ? (
              <StyledButton onClick={nextView}>
                Generate <StyledSendIcon />
              </StyledButton>
            ) : view > 3 ? "" : (
              <StyledButton onClick={nextView}>
                 <StyledRightIcon />
              </StyledButton>
            )}
          </StyledFooter>
        );
    }
}
