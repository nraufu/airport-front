import React from 'react';

const TopicBox = ({ position, img, title, description }) => {
    return (
        <div className='topic-box'>
            <div className={`topic-box__image topic-box__image--${position}`}>
                <img src={img} alt='topic-img' />
            </div>

            <div
                className={`topic-box__content topic-box__content--${position}`}
            >
                <h2>{title}</h2>

                <p>{description}</p>

                <ul className='topic-box__content__button-list'>
                    <li>
                        <a href='/#' title='Shopping' className='btn-link'>
                            View More
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopicBox;
