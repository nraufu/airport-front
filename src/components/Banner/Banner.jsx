import React from 'react';
import bannerImg from '../../assets/images/flying.jpg';
import InfoBox from '../Info-Box/InfoBox';

const Banner = ({ title }) => {
    return (
        <div
            className='banner'
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className='container d-flex align-items-center justify-content-between'>
                <h1 className='title text-white'>{title || ''}</h1>
                <InfoBox />
            </div>
        </div>
    );
};

export default Banner;
