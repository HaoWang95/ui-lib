import React from 'react';
import './SplitScreen.css'

const SplitScreen = ({
    left: Left,
    right: Right,
}) => {
    return(
        <div className="container">
            <div className="pane">
                <Left />
            </div>
            <div className="pane">
                <Right />
            </div>
        </div>
    )
};

export default SplitScreen;