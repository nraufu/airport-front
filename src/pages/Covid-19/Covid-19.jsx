import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../parts/Footer/Footer';
import bannerImg from '../../assets/images/corona-virus.jpg';
import covidImg from '../../assets/images/covid.png';
import infoFile from '../../assets/files/info_note.pdf';

const Covid = () => {
    return (
        <>
            <Banner title='Covid 19' bannerImg={bannerImg} />
            <div className='container covid-info spacing-sm'>
                <div className='row'>
                    <p className='mb-4'>
                        We are glad that you have chosen to travel to Rwanda.
                        For, your safety and the well-being of all travelers,
                        please be informed that it is mandatory to complete the
                        Public Health Passenger Locator Form. The Government of
                        Rwanda will use this information to contact you or
                        someone you have been in contact with while traveling to
                        Rwanda in case you develop coronavirus (COVID-19)
                        symptoms.
                    </p>

                    <div className='col-md-4 mb-5'>
                        <a
                            href='https://rbc.gov.rw/travel/'
                            className='btn btn-primary btn-lg text-white'
                        >
                            Passenger Locator Form
                        </a>
                    </div>

                    <p className='mb-3'>
                        In order to maintain public safety requirements, all
                        passengers coming to Rwanda are reminded to adhere to
                        the following guidelines:
                    </p>

                    <div className='col-md-4 mb-5'>
                        <a
                            href={infoFile}
                            className='btn btn-primary btn-lg text-white'
                            download='info-passenger.pdf'
                        >
                            Info Note for passengers
                        </a>
                    </div>

                    <p className='mb-5'>
                        Precautionary measures have been implemented throughout
                        the airport to maintain the health and safety of our
                        customers and staff. These measures include protective
                        plexiglass at check-in and immigration counters, thermal
                        and temperature screening, social distancing markers and
                        increased levels of sanitization in compliance with
                        international standards set out by the relevant
                        authorities.
                    </p>

                    <img src={covidImg} className='img-fluid' alt='img' />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Covid;
