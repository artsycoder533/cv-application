import React, { Component } from 'react';
import { Title } from './style';
import { Container } from './style';
import { FiDownload } from "react-icons/fi";
import { PlainButton } from '../Button/style';

export default class Header extends Component {
    render() {
        return (
          <Container>
                <Title>CV Builder</Title>
                {/* only show once user gets to last screen */}
                <PlainButton>Download CV <FiDownload/></PlainButton>
          </Container>
        );
    }
}
