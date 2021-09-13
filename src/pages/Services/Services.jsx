import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../parts/Footer/Footer';
import bannerImg from '../../assets/images/concierge.jpg';

const Services = () => {
    return (
        <>
            <Banner title='Services' bannerImg={bannerImg} />
            <section className='spacing-md'>
                <div className='container'>
                    {/* <!-- service 01 --*/}
                    <div class='row service-item align-items-center'>
                        <div class='col-md-6 col-12'>
                            <div class='service-item__img'>
                                <img
                                    src='pictures/service-07.jpg'
                                    alt='service-img'
                                    class='img-fluid'
                                />
                            </div>
                        </div>

                        <div class='col-md-6 col-12'>
                            <div class='service-item__content'>
                                <h2 class='service-item__title'>
                                    Cash dispensers & change
                                </h2>
                                <p className='mb-1'>
                                    Holders of international bank cards (Visa,
                                    Mastercard) can withdraw money from ATMs at
                                    the airport. These machines distribute
                                    Rwandan Franc banknotes (RWF). An exchange
                                    office also allows you to obtain Rwandan
                                    francs in exchange for international
                                    currencies upon your arrival in Kigali.
                                </p>

                                <ul>
                                    <li>
                                        <strong className='p-2'>
                                            Bank of kigali:
                                        </strong>
                                        ticket dispenser open 24/7, in the car
                                        park and agency inside the terminals
                                        (opening hours: Monday to Friday 6 a.m.
                                        to 8 p.m., Saturday 6 a.m. to 11 a.m.
                                        and 3 p.m. to 6 p.m., Sunday 6 a.m. at
                                        11 o'clock).
                                    </li>

                                    <li>
                                        <strong className='p-2'>
                                            Ecobank:
                                        </strong>
                                        ticket dispenser open 24/7
                                    </li>

                                    <li>
                                        <strong className='p-2'>
                                            Express Forex Bureau:
                                        </strong>
                                        currency exchange and money transfers,
                                        open 24 hours a day
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* -- service 02 -- */}
                    <div class='row service-item align-items-center'>
                        <div class='col-md-6 col-12 order-last order-md-first'>
                            <div class='service-item__content'>
                                <h2 class='service-item__title'>
                                    Turn Around Consulting
                                </h2>
                                <p>
                                    Ted did figure it out - time travel. And
                                    when we get back, we gonna tell everyone.
                                    How it's per possible, how it's done, what
                                    the dangers are. But then why fifty years in
                                    the future when the spacecraft encounters a
                                    black hole does the computer call it an
                                    'unknown entry event'? Why don't they know?
                                    If they don't know, that means black hole
                                    does the computer call it an 'unknown we
                                    never told anyone.
                                </p>
                            </div>
                        </div>

                        <div class='col-md-6 col-12'>
                            <div class='service-item__img img-right'>
                                <img
                                    src='pictures/service-08.jpg'
                                    alt='service-img'
                                    class='img-fluid'
                                />
                            </div>
                        </div>
                    </div>

                    {/* -- service 03 -- */}
                    <div class='row service-item align-items-center'>
                        <div class='col-md-6 col-12'>
                            <div class='service-item__img'>
                                <img
                                    src='pictures/service-09.jpg'
                                    alt='service-img'
                                    class='img-fluid'
                                />
                            </div>
                        </div>

                        <div class='col-md-6 col-12'>
                            <div class='service-item__content'>
                                <h2 class='service-item__title'>
                                    Audits & Assurance
                                </h2>
                                <p>
                                    Ted did figure it out - time travel. And
                                    when we get back, we gonna tell everyone.
                                    How it's per possible, how it's done, what
                                    the dangers are. But then why fifty years in
                                    the future when the spacecraft encounters a
                                    black hole does the computer call it an
                                    'unknown entry event'? Why don't they know?
                                    If they don't know, that means black hole
                                    does the computer call it an 'unknown we
                                    never told anyone.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* -- service 04 -- */}
                    <div class='row service-item align-items-center'>
                        <div class='col-md-6 col-12 order-last order-md-first'>
                            <div class='service-item__content'>
                                <h2 class='service-item__title'>
                                    Turn Around Consulting
                                </h2>
                                <p>
                                    Ted did figure it out - time travel. And
                                    when we get back, we gonna tell everyone.
                                    How it's per possible, how it's done, what
                                    the dangers are. But then why fifty years in
                                    the future when the spacecraft encounters a
                                    black hole does the computer call it an
                                    'unknown entry event'? Why don't they know?
                                    If they don't know, that means black hole
                                    does the computer call it an 'unknown we
                                    never told anyone.
                                </p>
                            </div>
                        </div>

                        <div class='col-md-6 col-12'>
                            <div class='service-item__img img-right'>
                                <img
                                    src='pictures/service-10.jpg'
                                    alt='service-img'
                                    class='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Services;
