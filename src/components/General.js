import React from 'react';
import GeneralInfo from './GeneralInfo';

export default function General(props) {
    return (
        <div className="general">
            <h2>General Info</h2>
            <GeneralInfo populateGeneral={props.populateGeneral} general={props.general}/>
        </div>
    );
}
