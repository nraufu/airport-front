import React from 'react';

const Spinner = (props) => {
    return (
        <div className={`spinner ${props.isWhite && 'background-white'}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Spinner;
