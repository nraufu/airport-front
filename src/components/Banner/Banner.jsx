import React from 'react';
import classnames from 'classnames';
import InfoBox from '../Info-Box/InfoBox';

const Banner = ({ title, bannerImg, classNames }) => {
    const bannerClass = classnames('banner', {
        [classNames]: classNames,
    });

    return (
        <div
            className={bannerClass}
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
