import React from 'react';

const Title = ({ name }) => {
    return (
        <div className='section-header justify-content-center text-center mb-5'>
            <h1 className='title'>{name}</h1>
        </div>
    );
};

export default Title;
