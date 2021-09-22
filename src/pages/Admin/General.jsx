import React from 'react';
import WhiteBox from '../../components/WhiteBox/WhiteBox';

const General = () => {
    const activities = [
        { title: 'Total Visit', number: 48 },
        { title: 'Total Airline', number: 20 },
        { title: 'Today arrivals', number: 10 },
        { title: 'Today departures', number: 10 },
    ];

    return (
        <>
            {/* cards */}
            <div class='row justify-content-center'>
                {activities.map((activity, index) => (
                    <WhiteBox
                        key={index}
                        title={activity.title}
                        number={activity.number}
                    />
                ))}
            </div>
        </>
    );
};

export default General;
