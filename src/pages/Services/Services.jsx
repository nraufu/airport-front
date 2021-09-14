import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../parts/Footer/Footer';
import bannerImg from '../../assets/images/concierge.jpg';
import atmImg from '../../assets/images/atm.jpg';
import loungeImg from '../../assets/images/lounge.jpg';
import internetImg from '../../assets/images/internet.jpg';
import healthImg from '../../assets/images/health.jpg';
import coffeeImg from '../../assets/images/coffee.jpg';
import securityImg from '../../assets/images/security.jpg';

const Services = () => {
    return (
        <>
            <Banner title='Services' bannerImg={bannerImg} />
            <section className='spacing-md'>
                <div className='container'>
                    {/* <!-- service 01 --*/}
                    <div className='row service-item align-items-center'>
                        <div className='col-md-6 col-12'>
                            <div className='service-item__img'>
                                <img
                                    src={atmImg}
                                    alt='service-img'
                                    className='img-fluid'
                                />
                            </div>
                        </div>

                        <div className='col-md-6 col-12'>
                            <div className='service-item__content pl'>
                                <h2 className='service-item__title'>
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
                    <div className='row service-item align-items-center'>
                        <div className='col-md-6 col-12 order-last order-md-first'>
                            <div className='service-item__content pr'>
                                <h2 className='service-item__title'>
                                    VIP lounges
                                </h2>
                                <p>
                                    Three VIP lounges are available at Kigali
                                    International Airport: two for departing
                                    passengers and one for arriving passengers.
                                    Access is reserved for business className or
                                    1st className travelers from certain
                                    airlines and holders of VIP lounge access or
                                    subscription cards. It is also possible to
                                    access it from time to time by paying access
                                    fees.
                                </p>

                                <ul>
                                    <li>
                                        <strong className='p-2'>
                                            The Pearl Lounge:
                                        </strong>
                                        this new lounge reserved for Rwandair
                                        passengers (business class and frequent
                                        travelers) can accommodate under the
                                        best conditions up to 100 passengers
                                        awaiting boarding.
                                    </li>

                                    <li>
                                        <strong className='p-2'>
                                            The Dream Lounge Rwandair:
                                        </strong>
                                        this new lounge reserved for Rwandair
                                        passengers (business class and frequent
                                        travelers) can accommodate under the
                                        best conditions up to 100 passengers
                                        awaiting boarding.
                                    </li>

                                    <li>
                                        <strong className='p-2'>
                                            The Arrival Lounge:
                                        </strong>
                                        this small lounge with a capacity of 25
                                        travelers is intended to welcome
                                        arriving passengers when they disembark
                                        while waiting for their luggage.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-md-6 col-12'>
                            <div className='service-item__img img-right'>
                                <img
                                    src={loungeImg}
                                    alt='service-img'
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>

                    {/* -- service 03 -- */}
                    <div className='row service-item align-items-center'>
                        <div className='col-md-6 col-12'>
                            <div className='service-item__img'>
                                <img
                                    src={internetImg}
                                    alt='service-img'
                                    className='img-fluid'
                                />
                            </div>
                        </div>

                        <div className='col-md-6 col-12'>
                            <div className='service-item__content pl'>
                                <h2 className='service-item__title'>
                                    Internet
                                </h2>
                                <p>
                                    Rwanda is a model throughout the world for
                                    its desire to provide everyone with fast and
                                    free access to the Internet. Kigali
                                    International Airport is no exception to
                                    this rule and has free wifi access points
                                    throughout the airport area. In addition,
                                    the country has several 4G operators selling
                                    SIM cards without subscription and 3G USB
                                    keys allowing cheap and fast access to the
                                    Internet on your PC, tablet or phone. These
                                    chips are available and can be activated in
                                    several shops at the airport.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* -- service 04 -- */}
                    <div className='row service-item align-items-center'>
                        <div className='col-md-6 col-12 order-last order-md-first'>
                            <div className='service-item__content pr'>
                                <h2 className='service-item__title'>
                                    Police and security
                                </h2>
                                <p>
                                    Kigali Airport is constantly concerned with
                                    the safety of passengers and aircraft. The
                                    airport police station is listening to all
                                    travelers. Security officers also ensure
                                    compliance with international standards. You
                                    can call on them to report any activity that
                                    you think is suspicious. In addition, we
                                    remind you that leaving luggage unattended
                                    can lead to its destruction on the one hand
                                    and to legal proceedings against you on the
                                    other. Rwandan National Police at Kigali
                                    Airport: +250 (0) 788311139
                                </p>
                            </div>
                        </div>

                        <div className='col-md-6 col-12'>
                            <div className='service-item__img img-right'>
                                <img
                                    src={securityImg}
                                    alt='service-img'
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>

                    {/* -- service 05 -- */}
                    <div className='row service-item align-items-center'>
                        <div className='col-md-6 col-12'>
                            <div className='service-item__img'>
                                <img
                                    src={healthImg}
                                    alt='service-img'
                                    className='img-fluid'
                                />
                            </div>
                        </div>

                        <div className='col-md-6 col-12'>
                            <div className='service-item__content pl'>
                                <h2 className='service-item__title'>Health</h2>
                                <p>
                                    In order to ensure the comfort of its
                                    travelers and visitors, Kigali airport
                                    offers a medical service for health
                                    emergencies (presence of defibrillators and
                                    personnel trained in use). Health
                                    emergencies are on duty 24 hours a day. For
                                    the most serious cases, an evacuation is
                                    organized to a hospital structure in the
                                    city.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* -- service 06 -- */}
                    <div className='row service-item align-items-center'>
                        <div className='col-md-6 col-12 order-last order-md-first'>
                            <div className='service-item__content pr'>
                                <h2 className='service-item__title'>
                                    Bar et restauration
                                </h2>
                                <p>
                                    The airport has bars and restaurants in the
                                    main hall and in the boarding area. You can
                                    eat there or consume various drinks, sodas
                                    or mineral water. Fast food (sandwiches) is
                                    also available 24 hours a day. The area
                                    surrounding the airport, less than 5 minutes
                                    by taxi, is also home to a large number of
                                    restaurants.
                                </p>

                                <ul>
                                    <li>
                                        <strong className='p-2'>
                                            Bourbon Coffee:
                                        </strong>
                                        the Rwandan chain has two establishments
                                        within the airport. One welcomes
                                        travelers and visitors in the public
                                        area and the other in the boarding
                                        lounge. You will taste the best coffee
                                        in Rwanda in a comfortable atmosphere
                                        and can enjoy drinks, snacks and
                                        pastries. Phone: +250 (0) 789 777 774
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-md-6 col-12'>
                            <div className='service-item__img img-right'>
                                <img
                                    src={coffeeImg}
                                    alt='service-img'
                                    className='img-fluid'
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
