import React, { Component } from 'react';
import { FiCheckCircle } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default class SectionButtons extends Component {
    //return another form section
    addAnotherFormSection = () => {
        
    }

    render() {
        return (
            <div className="section__buttons">
                <button>
                    Add More <FiPlus/>
                </button>
                <button type="submit">
                    Submit Section <FiCheckCircle />
                </button>
            </div>
        )
    }
}
