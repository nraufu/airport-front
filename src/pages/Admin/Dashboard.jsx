import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NewsList from './AdminNews/NewsList';
import Airlines from './Airlines/Airlines';
import Arrivals from './Arrivals/Arrivals';
import BookingSystem from './Booking/BookingSystem';
import Departures from './Departures/Departures';
import Drivers from './Drivers/Drivers';
import General from './General';
import SendReports from './SendReports/SendReports';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const isActive = (tab) => {
        return activeTab === tab ? 'side-nav__item--active' : '';
    };

    return (
        <div className='dashboard'>
            <nav className='sidebar no-print'>
                <ul className='side-nav'>
                    <li className={`side-nav__item ${isActive('dashboard')}`}>
                        <NavLink
                            to='/dashboard'
                            className='side-nav__link'
                            onClick={() => setActiveTab('dashboard')}
                        >
                            <i className='lnr lnr-home side-nav__icon' />
                            <span>DashBoard</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${isActive('airlines')}`}>
                        <NavLink
                            to='/dashboard/airlines'
                            className='side-nav__link'
                            onClick={() => setActiveTab('airlines')}
                        >
                            <i className='lnr lnr-rocket side-nav__icon' />
                            <span>Airlines</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${isActive('departures')}`}>
                        <NavLink
                            to='/dashboard/departures'
                            className='side-nav__link'
                            onClick={() => setActiveTab('departures')}
                        >
                            <i className='lnr lnr-exit side-nav__icon' />
                            <span>Departures</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${isActive('arrivals')}`}>
                        <NavLink
                            to='/dashboard/arrivals'
                            className='side-nav__link'
                            onClick={() => setActiveTab('arrivals')}
                        >
                            <i className='lnr lnr-enter side-nav__icon' />
                            <span>Arrivals</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${isActive('taxiDrivers')}`}>
                        <NavLink
                            to='/dashboard/taxDrivers'
                            className='side-nav__link'
                            onClick={() => setActiveTab('taxiDrivers')}
                        >
                            <i className='lnr lnr-car side-nav__icon' />
                            <span>Taxi Drivers</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${isActive('taxiBookings')}`}>
                        <NavLink
                            to='/dashboard/taxBookings'
                            className='side-nav__link'
                            onClick={() => setActiveTab('taxiBookings')}
                        >
                            <i className='lnr lnr-bookmark side-nav__icon' />
                            <span>Taxi Bookings</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${isActive('news')}`}>
                        <NavLink
                            to='/dashboard/news'
                            className='side-nav__link'
                            onClick={() => setActiveTab('news')}
                        >
                            <i className='lnr lnr-license side-nav__icon' />
                            <span>News</span>
                        </NavLink>
                    </li>
                    <li className={`side-nav__item ${isActive('reports')}`}>
                        <NavLink
                            to='/dashboard/reports'
                            className='side-nav__link'
                            onClick={() => setActiveTab('reports')}
                        >
                            <i className='lnr lnr-envelope side-nav__icon' />
                            <span>Send Reports</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <main className='dashboard-view'>
                {activeTab === 'dashboard' && <General />}
                {activeTab === 'airlines' && <Airlines />}
                {activeTab === 'departures' && <Departures />}
                {activeTab === 'arrivals' && <Arrivals />}
                {activeTab === 'news' && <NewsList />}
                {activeTab === 'reports' && <SendReports />}
                {activeTab === 'taxiDrivers' && <Drivers />}
                {activeTab === 'taxiBookings' && <BookingSystem />}
            </main>
        </div>
    );
};

export default Dashboard;
