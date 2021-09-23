import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageLibrary from '../../parts/Gallery/Gallery';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../parts/Footer/Footer';
import VisitRwanda from '../../parts/Visit-rwanda/VisitRwanda';
import bannerImg from '../../assets/images/airplane-wing.jpg';
import { Title } from '../../components/UI';
import TopicBox from '../../components/Topic-Box/TopicBox';
import image1 from '../../assets/images/kigali-duty-free.jpg';
import image2 from '../../assets/images/kigali-airport-lounge.jpg';
import CardNews from '../../components/NewsComponent.jsx/CardNews';
import { newsActions } from '../../store/actions/news';

const Home = ({ news, fetchNews }) => {
    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

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

    const topics = [
        {
            title: 'Duty Free && Shop',
            description:
                'Whether you’re travelling or dropping off someone, you can always make time for a spot of shopping and a tasty treat.',
            img: image1,
            position: 'right',
        },
        {
            title: 'Getting Around',
            description:
                'Spend Time around the airport discovering our airport nice premises and room where you can spend time waiting for your flight',
            img: image2,
            position: 'left',
        },
    ];

    return (
        <>
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

            <div className='container'>
                <div className='row'>
                    {topics.map((topic, index) => (
                        <div className='col-12' key={index}>
                            <TopicBox {...topic} />
                        </div>
                    ))}
                </div>
            </div>

            <VisitRwanda />

            <div className='spacing-md'>
                <Title name='Latest News' />
                <div className='container'>
                    <div className='row justify-content-center'>
                        {news.slice(0, 3).map((news, index) => (
                            <CardNews key={index} {...news} />
                        ))}
                    </div>
                </div>

                <div className='text-center'>
                    <Link
                        to='/news'
                        className='btn btn-primary text-white mt-5 text-center py-2 px-4'
                    >
                        Read More
                    </Link>
                </div>
            </div>

            <ImageLibrary />

            <Footer />
        </>
    );
};

const mapStateToProps = ({ newsState }) => {
    return {
        news: newsState.news,
    };
};

const mapDispatchToProps = {
    fetchNews: newsActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
