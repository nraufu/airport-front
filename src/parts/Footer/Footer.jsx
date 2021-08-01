import React from 'react';
import Logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer class='footer'>
            <section class='footer-top spacing-lg'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-lg-3 col-sm-6 col-12 mb-4 mb-lg-0 about'>
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

                        <div class='col-lg-3 col-sm-6 col-12 mb-4 mb-lg-0 links'>
                            <h5 class='footer-title'>Useful Links</h5>

                            <ul class='d-block list-unstyled'>
                                <li>
                                    <a
                                        href='https://www.rwandair.com/'
                                        class='text-decoration-none'
                                    >
                                        RwandaAir
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://www.migration.gov.rw/home/'
                                        class='text-decoration-none'
                                    >
                                        Migration
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='http://www.akageraaviation.com/'
                                        class='text-decoration-none'
                                    >
                                        Rwanda Civil Aviation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class='col-lg-3 col-sm-6 col-12 mb-4 mb-lg-0 contacts'>
                            <h5 class='footer-title'>Contact Us</h5>

                            <ul class='list-unstyled'>
                                <li class='contact'>
                                    <i class='lnr lnr-map-marker' />

                                    <a href='/' class='text-decoration-none'>
                                        Kigali/Rwanda
                                    </a>
                                </li>

                                <li class='contact'>
                                    <i class='lnr lnr-envelope' />
                                    <div class='d-flex flex-column'>
                                        <a
                                            href='mailto:info@kia.com'
                                            class='text-decoration-none'
                                        >
                                            info@kia.com
                                        </a>
                                        <a
                                            href='mailto:services@kia.com'
                                            class='text-decoration-none'
                                        >
                                            services@kia.com
                                        </a>
                                    </div>
                                </li>

                                <li class='contact'>
                                    <i class='lnr lnr-phone-handset' />
                                    <div class='d-flex flex-column'>
                                        <a
                                            href='tel:1800-121-3637'
                                            class='text-decoration-none'
                                        >
                                            0000-000-0000
                                        </a>
                                        <a
                                            href='tel:+91 555 234-8765'
                                            class='text-decoration-none'
                                        >
                                            +00 000 000-0000
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class='col-lg-3 col-sm-6 col-12 subscription'>
                            <h5 class='footer-title'>Follow Us!</h5>

                            <ul class='social-networks'>
                                <li class='social-networks-icon'>
                                    <a href='https://www.facebook.com/'>
                                        <i class='fa fa-facebook-f' />
                                    </a>
                                </li>

                                <li class='social-networks-icon'>
                                    <a href='https://www.instagram.com/'>
                                        <i class='fa fa-instagram' />
                                    </a>
                                </li>

                                <li class='social-networks-icon'>
                                    <a href='https://twitter.com/'>
                                        <i class='fa fa-twitter' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class='footer-bottom text-center'>
                <p class='mb-0 text-white'>
                    Copyright © 2021 KIA. All rights reserved.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
