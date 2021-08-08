import { Fragment } from 'react';
import sky from '../../assets/images/blue-sky.jpg';
import ImageLibrary from '../../parts/gallery/Gallery';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';

const Home = () => {
    const servicesCard = [
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
                    {servicesCard.map((service, index) => (
                        <div className='col-lg-4 col-md-6 col-12 service-card'>
                            <Card
                                key={index}
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

            <ImageLibrary />
        </Fragment>
    );
};

export default Home;
