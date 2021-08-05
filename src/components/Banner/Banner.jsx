import React from 'react';
import classnames from 'classnames';

const Banner = ({ title, img, className }) => {
    const wrapperClass = classnames('banner', {
        [className]: className,
    });

    return (
        <div
            className={wrapperClass}
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className='container'>
                {title && <h1 className='title'>{title}</h1>}
            </div>
            <div>flights component</div>
        </div>
    );
};

export default Banner;
