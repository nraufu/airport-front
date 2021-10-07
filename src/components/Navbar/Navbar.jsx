import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { ChangePasswordModal } from '../../pages/Admin/ChangePassword/modals';
import { deleteToken } from '../../utils/authentication';
import NavItem from './NavItem';

const Navbar = ({ isAuthenticated, location }) => {
    const isDashboard = location.pathname.includes('/dashboard');

    return (
        <nav className='navbar navbar-expand-lg no-print'>
            <div className={isAuthenticated ? 'container-fluid' : 'container'}>
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

                {isAuthenticated && isDashboard ? (
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
                            <Dropdown.Item
                                onClick={() => ChangePasswordModal()}
                            >
                                Change Password
                            </Dropdown.Item>
                            <Dropdown.Item
                                href='/'
                                onClick={() => deleteToken()}
                            >
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
};

export default withRouter(Navbar);
