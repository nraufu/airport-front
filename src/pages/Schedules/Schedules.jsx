import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/images/blue-sky.jpg';
import Footer from '../../parts/Footer/Footer';
import { Table } from '../../components/UI';
import { arrivalActions } from '../../store/actions/arrivals';
import { departureActions } from '../../store/actions/departures';

const Schedules = ({ arrivals, departures, loadArrivals, loadDepartures }) => {
    const [activeTab, setActiveTab] = useState('departures');

    useEffect(() => {
        loadArrivals();
        loadDepartures();
    }, [loadArrivals, loadDepartures]);

    const columnsDepartures = [
        {
            label: 'AIRLINE',
            path: 'airlineLogo',
            content: (item) => (
                <img src={item.airlineLogo} alt='logo' className='logo-image' />
            ),
        },
        { label: 'FLIGHT', path: 'flight' },
        { label: 'TO', path: 'destination' },
        { label: 'SCHEDULED', path: 'scheduled' },
        { label: 'STATUS', path: 'status' },
    ];

    const columnsArrivals = [
        {
            label: 'AIRLINE',
            path: 'airlineLogo',
            content: (item) => (
                <img src={item.airlineLogo} alt='logo' className='logo-image' />
            ),
        },
        { label: 'FLIGHT', path: 'flight' },
        { label: 'FROM', path: 'origin' },
        { label: 'SCHEDULED', path: 'scheduled' },
        { label: 'STATUS', path: 'status' },
    ];

    return (
        <>
            <div
                className='flights-wrapper'
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                <div className='container'>
                    <div className='flights-header'>
                        <h1 className='title'>Arrivals and Departures</h1>

                        <div className='alert-timed'>
                            <p>
                                <strong>
                                    <span style={{ color: '#ff0000' }}>
                                        IMPORTANT NOTICE
                                    </span>
                                </strong>
                                : Given the evolving situation, Kigali
                                International Airport recommends that passengers
                                contact their airline for further information
                                about an upcoming flight.
                            </p>
                            <p>
                                For the most recent updates on country-specific
                                Covid-19 requirements and travel restrictions,
                                please click <Link to='/covid'>here</Link>.
                            </p>
                        </div>
                    </div>

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
                                    columns={columnsDepartures}
                                    data={departures}
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
                                    data={arrivals}
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

const mapStateToProps = ({ departuresState, arrivalsState }) => {
    return {
        arrivals: arrivalsState.arrivals,
        departures: departuresState.departures,
    };
};

const mapDispatchToProps = {
    loadArrivals: arrivalActions.getAll,
    loadDepartures: departureActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedules);
