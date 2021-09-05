import React from 'react';

const Title = ({ name }) => {
    return (
        <div class='section-header justify-content-center text-center mb-5'>
            <h1 class='title'>{name}</h1>
        </div>
    );
};

export default Title;
