import React from 'react';
import Navbar from '../Navbar/Navbar';
import Clock from '../Clock/Clock';

const Header = ({ isAuthenticated }) => {
    return (
        <>
            {!isAuthenticated && (
                <div className='top-bar bg-primary text-white'>
                    <div className='container'>
                        <div className='top-bar--left'>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='mailto:info@kia.com'>
                                        <i className='lnr lnr-envelope'></i>
                                        info@kia.com
                                    </a>
                                </li>

                                <li>
                                    <a href='tel:+00 000-0000-000'>
                                        <i className='lnr lnr-phone-handset'></i>
                                        +00 000-0000-000
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='top-bar--right pt-1 pt-md-0'>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='htps://www.facebook.com'>
                                        <i className='fa fa-facebook-f'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/'>
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='https://twitter.com/'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                </li>
                            </ul>

                            <Clock />
                        </div>
                    </div>
                </div>
            )}

            <Navbar isAuthenticated={isAuthenticated} />
        </>
    );
};

export default Header;
