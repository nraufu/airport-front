import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import NavItem from './NavItem';

const Navbar = () => (
    <nav className='navbar navbar-expand-lg'>
        <div className='container'>
            <NavLink className='navbar-brand' to='/'>
                <img src={Logo} alt='airport logo' />
            </NavLink>

            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbar'
                aria-controls='navbar'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon' />
            </button>

            <div
                className='collapse navbar-collapse align-self-end'
                id='navbar'
            >
                <ul className='navbar-nav'>
                    <NavItem link='/' exact label='Home' />
                    <NavItem link='/schedules' label='Flight Schedules' />
                    <NavItem link='/services' label='Services' />
                    <NavItem link='/weather' label='Weather' />
                    <NavItem link='/covid' label='Covid-19' />
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
