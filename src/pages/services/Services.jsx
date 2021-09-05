import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../parts/Footer/Footer';
import bannerImg from '../../assets/images/airplane-wing.jpg';

const Services = () => {
    return (
        <>
            <Banner title='Services' bannerImg={bannerImg} />
            <h1>Services</h1>
            <Footer />
        </>
    );
};

export default Services;
