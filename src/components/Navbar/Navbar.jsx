import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { deleteToken } from '../../utils/authentication';
import NavItem from './NavItem';

const Navbar = ({ isAuthenticated }) => (
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

            {isAuthenticated ? (
                <Dropdown className='admin-tab'>
                    <Dropdown.Toggle
                        size='sm'
                        variant='bg-light'
                        id='dropdown-basic'
                    >
                        <i className='lnr lnr-user m-2'></i>
                        <span className='text'>Admin</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href='/' onClick={() => deleteToken()}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            ) : (
                <div
                    className='collapse navbar-collapse align-self-end'
                    id='navbar'
                >
                    <ul className='navbar-nav'>
                        <NavItem link='/' exact label='Home' />
                        <NavItem link='/schedules' label='Flights' />
                        <NavItem link='/services' label='Services' />
                        <NavItem link='/news' label='News' />
                        <NavItem link='/covid' label='Covid-19' />
                    </ul>
                </div>
            )}
        </div>
    </nav>
);

export default Navbar;
