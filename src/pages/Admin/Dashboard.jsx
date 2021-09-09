import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Airlines from './Airlines';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    const isActive = (tab) => {
        return activeTab === tab ? 'side-nav__item--active' : '';
    };

    return (
        <div className='dashboard'>
            <nav className='sidebar'>
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
                </ul>
            </nav>

            <main className='dashboard-view'>
                {activeTab === 'dashboard' && <p>Dashboard</p>}
                {activeTab === 'airlines' && <Airlines />}
                {activeTab === 'departures' && <p>Departures</p>}
                {activeTab === 'arrivals' && <p>Arrivals</p>}
                {activeTab === 'news' && <p>News</p>}
            </main>
        </div>
    );
};

export default Dashboard;
