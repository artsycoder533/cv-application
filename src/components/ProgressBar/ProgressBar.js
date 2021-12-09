import React, { Component } from 'react'
import { Container, Step, StyledFiCheck, StyledStatus } from './styles';
import { Circle } from './styles';


export default class ProgressBar extends Component {
    state = {
        pages: ["General", "Education", "Experience", "Skills"],
        view: this.props.view
    }
    render() {
        const { pages } = this.state;
        const { view } = this.props;
        return (
            <Container>
                {pages.map((page, index) => {
                    return (
                      <Step>
                        {/* if view is equal to index add active class*/}
                        {view >= index + 1 ? (
                          <Circle current>
                            <StyledFiCheck />
                          </Circle>
                        ) : (
                          <Circle>{index + 1}</Circle>
                        )}
                        {view === index ? <StyledStatus bold>{page}</StyledStatus> : <StyledStatus>{page}</StyledStatus>}
                      </Step>
                    );
                })}
          </Container>
        );
    }
}
