import React, { useState } from 'react';
import airplaneWing from '../../assets/images/airplane-wing.jpg';
import Footer from '../../parts/Footer/Footer';
import Table from '../../components/UI/Table/Table';
import {
    columnsDepartues,
    dataDepartures,
    columnsArrivals,
    dataArrivals,
} from './data';

const Schedules = () => {
    const [activeTab, setActiveTab] = useState('departures');

    return (
        <>
            <div
                className='flights-wrapper'
                style={{ backgroundImage: `url(${airplaneWing})` }}
            >
                <div className='container'>
                    <div className='flights-container'>
                        <ul id='ad-tabs' className='tabs'>
                            <li className='tab'>
                                <button
                                    className={
                                        activeTab === 'departures'
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={() => setActiveTab('departures')}
                                >
                                    Departures
                                </button>
                            </li>

                            <li className='tab'>
                                <button
                                    className={
                                        activeTab === 'arrivals' ? 'active' : ''
                                    }
                                    onClick={() => setActiveTab('arrivals')}
                                >
                                    Arrivals
                                </button>
                            </li>
                        </ul>

                        {activeTab === 'departures' && (
                            <div
                                id='departurestab'
                                className='tab-content active'
                            >
                                <Table
                                    columns={columnsDepartues}
                                    data={dataDepartures}
                                />
                            </div>
                        )}

                        {activeTab === 'arrivals' && (
                            <div
                                id='departurestab'
                                className='tab-content active'
                            >
                                <Table
                                    columns={columnsArrivals}
                                    data={dataArrivals}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Schedules;
