import React from 'react';
import EducationInfo from './EducationInfo';
import SectionButtons from './SectionButtons';


export default function General(props) {
    return (
        <div className="education">
            <h2>Education</h2>
            <EducationInfo props={props} />
            <SectionButtons />
            <br />
        </div>
    );
    
}

