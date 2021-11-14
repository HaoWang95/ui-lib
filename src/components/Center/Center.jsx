import React from "react";
import './Center.css';

const Center = (props) => {
    return(
        <div className="container">
            {props.children}
        </div>
    )
};

export default Center;