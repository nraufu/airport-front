import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContentRow from './ContentRow';
import arrivalIcon from '../../assets/images/ico_arrivals.png';
import departureIcon from '../../assets/images/ico_departures.png';

const InfoBox = ({ departures, arrivals }) => {
    const [activeTab, setActiveTab] = useState('departures');

    return (
        <div className='info-box'>
            <div className='box-inner'>
                <div className='flights-nav flights-tab-nav'>
                    <button
                        className={activeTab === 'departures' ? 'current' : ''}
                        onClick={() => setActiveTab('departures')}
                    >
                        <img src={departureIcon} alt='Departures' /> Departures
                    </button>

                    <button
                        className={activeTab === 'arrivals' ? 'current' : ''}
                        onClick={() => setActiveTab('arrivals')}
                    >
                        <img src={arrivalIcon} alt='Arrivals' /> Arrivals
                    </button>
                </div>

                <div className='content'>
                    <div className='content-row titles'>
                        <span className='details'>
                            {activeTab === 'departures'
                                ? 'DESTINATION'
                                : 'ORIGIN'}
                        </span>
                        <span className='flightno'>FLIGHT</span>
                        <span className='time'>TIME</span>
                        <span className='status'>STATUS</span>
                    </div>

                    {activeTab === 'departures' &&
                        departures
                            .slice(0, 4)
                            .map((departure, index) => (
                                <ContentRow
                                    key={index}
                                    details={departure.destination}
                                    flight={departure.flight}
                                    time={departure.scheduled}
                                    status={departure.status}
                                />
                            ))}

                    {activeTab === 'arrivals' &&
                        arrivals
                            .slice(0, 4)
                            .map((arrival, index) => (
                                <ContentRow
                                    key={index}
                                    details={arrival.origin}
                                    flight={arrival.flight}
                                    time={arrival.scheduled}
                                    status={arrival.status}
                                />
                            ))}
                </div>

                <div className='text-center py-4 mt-1'>
                    <Link to='/schedules' className='btn-more'>
                        View all Flights
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
