import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../parts/Footer/Footer';
import bannerImg from '../../assets/images/airplane-wing.jpg';

const Weather = () => {
    return (
        <>
            <Banner title='weather' bannerImg={bannerImg} />
            <Footer />
        </>
    );
};

export default Weather;
