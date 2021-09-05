import { Fragment } from 'react';
import ImageLibrary from '../../parts/Gallery/Gallery';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../parts/Footer/Footer';
import VisitRwanda from '../../parts/Visit-rwanda/VisitRwanda';
import bannerImg from '../../assets/images/flying.jpg';
import newsImg from '../../assets/images/blue-sky.jpg';
import News from '../../components/News/News';
import Title from '../../components/UI/Title/Title';

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

    const news = [
        {
            img: newsImg,
            title: 'News One',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
        {
            img: newsImg,
            title: 'News Two',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
        {
            img: newsImg,
            title: 'News Three',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
    ];

    return (
        <Fragment>
            <Banner bannerImg={bannerImg} classNames='hero' />

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
            <div className='spacing-md'>
                <Title name='Latest News' />
                <News data={news} />
            </div>
            <ImageLibrary />
            <Footer />
        </Fragment>
    );
};

export default Home;
