import React from 'react';


export default function GeneralPreview(props) {
    const { name, email, phone, portfolio, linkedIn, github } = props.general;

    return (
        <div>
            <h3>{name}</h3>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{portfolio}</p>
            <p>{linkedIn}</p>
            <p>{github}</p>
        </div>
    );
    
}
