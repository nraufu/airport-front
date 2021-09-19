import React from 'react';

const ContentRow = ({ details, flight, time, status }) => {
    return (
        <div className='content-row'>
            <span className='details'>{details}</span>
            <span className='flightno'>{flight}</span>
            <span className='time'>{time}</span>
            <span className='status'>{status}</span>
        </div>
    );
};

export default ContentRow;
