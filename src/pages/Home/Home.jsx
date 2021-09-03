import { Fragment } from 'react';
import sky from '../../assets/images/blue-sky.jpg';
import ImageLibrary from '../../parts/Gallery/Gallery';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../parts/Footer/Footer';
import VisitRwanda from '../../parts/Visit-rwanda/VisitRwanda';

const Home = () => {
    const services = [
        {
            title: 'Weather',
            description: 'Weather forecast for the next days',
            icon: 'lnr lnr-sun',
            btnLabel: 'View Details',
            link: '/weather',
        },
        {
            title: 'Parking',
            description: 'Available parking slots',
            icon: 'lnr lnr-car',
            btnLabel: 'View Details',
            link: '/parking',
        },
        {
            title: 'Flights',
            description: 'Check out our flights schedules',
            icon: 'lnr lnr-location',
            btnLabel: 'Discover',
            link: '/flights',
        },
    ];

    return (
        <Fragment>
            <Banner img={sky} className='hero' />

            <div
                className='container spacing-lg'
                style={{ marginTop: '-15rem' }}
            >
                <div className='row'>
                    {services.map((service, index) => (
                        <div
                            className='col-lg-4 col-md-6 col-12 service-card'
                            key={index}
                        >
                            <Card
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                btnLabel={service.btnLabel}
                                link={service.link}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <VisitRwanda />
            <ImageLibrary />
            <Footer />
        </Fragment>
    );
};

export default Home;
