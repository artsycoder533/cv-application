import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import CV from "./CV";

const functionalCV = () => {
    const componentRef = useRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />
            <CV ref={componentRef} />
        </div>
    );
};

export default functionalCV;
