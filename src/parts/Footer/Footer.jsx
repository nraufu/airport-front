import React from 'react';
import Logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <section className='footer-top spacing-lg'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-sm-6 col-12 mb-4 mb-lg-0 about'>
                            <img
                                src={Logo}
                                alt='airport logo'
                                className='footer-main--logo mb-3'
                            />

                            <p>
                                The airport is located on the outskirts of
                                Kanombe, southeast of Kigali, about 5 km from
                                the city center by expressway and about 10km
                                from the airport.
                            </p>
                        </div>

                        <div className='col-lg-3 col-sm-6 col-12 mb-4 mb-lg-0 links'>
                            <h5 className='footer-title'>Useful Links</h5>

                            <ul className='d-block list-unstyled'>
                                <li>
                                    <a
                                        href='https://www.rwandair.com/'
                                        className='text-decoration-none'
                                    >
                                        RwandaAir
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.migration.gov.rw/home/'
                                        className='text-decoration-none'
                                    >
                                        Migration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='http://www.akageraaviation.com/'
                                        className='text-decoration-none'
                                    >
                                        Rwanda Civil Aviation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-3 col-sm-6 col-12 mb-4 mb-lg-0 contacts'>
                            <h5 className='footer-title'>Contact Us</h5>

                            <ul className='list-unstyled'>
                                <li className='contact'>
                                    <i className='lnr lnr-map-marker' />

                                    <a
                                        href='/'
                                        className='text-decoration-none'
                                    >
                                        Kigali/Rwanda
                                    </a>
                                </li>

                                <li className='contact'>
                                    <i className='lnr lnr-envelope' />
                                    <div className='d-flex flex-column'>
                                        <a
                                            href='mailto:info@kia.com'
                                            className='text-decoration-none'
                                        >
                                            info@kia.com
                                        </a>
                                        <a
                                            href='mailto:services@kia.com'
                                            className='text-decoration-none'
                                        >
                                            services@kia.com
                                        </a>
                                    </div>
                                </li>

                                <li className='contact'>
                                    <i className='lnr lnr-phone-handset' />
                                    <div className='d-flex flex-column'>
                                        <a
                                            href='tel:1800-121-3637'
                                            className='text-decoration-none'
                                        >
                                            0000-000-0000
                                        </a>
                                        <a
                                            href='tel:+91 555 234-8765'
                                            className='text-decoration-none'
                                        >
                                            +00 000 000-0000
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className='col-lg-3 col-sm-6 col-12 subscription'>
                            <h5 className='footer-title'>Follow Us!</h5>

                            <ul className='social-networks'>
                                <li className='social-networks-icon'>
                                    <a href='https://www.facebook.com/'>
                                        <i className='fa fa-facebook-f' />
                                    </a>
                                </li>

                                <li className='social-networks-icon'>
                                    <a href='https://www.instagram.com/'>
                                        <i className='fa fa-instagram' />
                                    </a>
                                </li>

                                <li className='social-networks-icon'>
                                    <a href='https://twitter.com/'>
                                        <i className='fa fa-twitter' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='footer-bottom text-center'>
                <p className='mb-0 text-white'>
                    Copyright © 2021 KIA. All rights reserved.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
