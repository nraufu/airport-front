import React from 'react';

const TopicBox = ({ position, img, topics, title, description }) => {
    return (
        <div className='topic-box'>
            <div className='topic-box__image topic-box__image--right'>
                <img
                    src='https://mia-prod-s3-cdn.s3.amazonaws.com/wp-content/uploads/2021/06/MIA-Brand-Campaign-Shopping-copy-2.jpg'
                    alt=''
                />
            </div>

            <div className='topic-box__content topic-box__content--right'>
                <h2>Shop &amp; Dine</h2>

                <p>
                    Whether you’re travelling or dropping off someone, you can
                    always make time for a spot of shopping and a tasty treat.
                </p>

                <ul className='topic-box__content__button-list'>
                    <li>
                        <a
                            href='https://www.maltairport.com/visitor/shop-dine/shopping/'
                            title='Shopping'
                            className='btn btn-primary'
                        >
                            Shopping{' '}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopicBox;
