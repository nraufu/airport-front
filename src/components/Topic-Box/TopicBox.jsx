import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link
                            to='/services'
                            title='Shopping'
                            className='btn-link'
                        >
                            View More
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopicBox;
