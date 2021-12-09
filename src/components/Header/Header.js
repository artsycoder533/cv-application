import React, { Component } from 'react';
import { StyledDownloadIcon, Title } from './style';
import { Container } from './style';
import { FiDownload } from "react-icons/fi";
import { DownloadButton} from '../Button/style';

export default class Header extends Component {
  render() {
    const { view } = this.props;
        return (
          <Container>
            <Title>CV Builder</Title>
            
            {/* only show once user gets to last screen */}
            {view === 4 ? <DownloadButton className="hide" onClick={() => window.print()}> <StyledDownloadIcon/></DownloadButton> : ""}
            
          </Container>
        );
    }
}
