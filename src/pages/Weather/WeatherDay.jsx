import React from 'react';

const WeatherDay = ({ weatherType, min, max, weatherKey, date }) => {
    const convertToCelcius = (temp) => {
        return Math.round((temp - 32) * (5 / 9));
    };

    const day = new Date(date).getDay();

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const dayOfWeek = days[day];
    return (
        <div className='forecast'>
            <div className='forecast-header'>
                <div className='day'>{dayOfWeek}</div>
            </div>
            <div className='forecast-content'>
                <div className='forecast-icon'>
                    <img
                        src={`https://developer.accuweather.com/sites/default/files/${weatherKey}-s.png`}
                        alt='weather icon'
                        width='48'
                    />
                </div>
                <span className='forecast-details'>{weatherType}</span>
                <div className='degree'>
                    {convertToCelcius(min)}
                    <sup>o</sup>C
                </div>
                <small>
                    {convertToCelcius(max)}
                    <sup>o</sup>
                </small>
            </div>
        </div>
    );
};

export default WeatherDay;
