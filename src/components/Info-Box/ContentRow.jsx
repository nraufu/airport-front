import React from 'react';

const ContentRow = ({ details, flightno, time, status }) => {
    return (
        <div className='content-row'>
            <span className='details'>{details}</span>
            <span className='flightno'>{flightno}</span>
            <span className='time'>{time}</span>
            <span className='status'>{status}</span>
        </div>
    );
};

export default ContentRow;
