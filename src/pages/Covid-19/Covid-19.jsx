import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../parts/Footer/Footer';
import bannerImg from '../../assets/images/airplane-wing.jpg';

const Covid = () => {
    return (
        <>
            <Banner title='Covid 19' bannerImg={bannerImg} />
            <Footer />
        </>
    );
};

export default Covid;
