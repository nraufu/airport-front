import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ label, link, exact }) => {
    return (
        <li className='nav-item'>
            <NavLink className='nav-link' to={link} exact={exact}>
                {label}
            </NavLink>
        </li>
    );
};

export default NavItem;
