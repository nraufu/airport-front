import React from 'react';
import { Link } from 'react-router-dom';

const CardNews = ({ id, thumbnail, title, description, actionBtns }) => {
    return (
        <div className='col-lg-4 col-md-6 col-12 pb-30'>
            <div className='news-item'>
                <a href='/#' className='d-block mb-3'>
                    <img
                        src={thumbnail}
                        alt='news'
                        className='img-fluid news-item--picture'
                    />
                </a>

                <div className='news-item--content'>
                    <h5>
                        <a
                            href='/#'
                            className='text-decoration-none news-item--title'
                        >
                            {title}
                        </a>
                    </h5>

                    <p className='mb-3'>{description}</p>

                    {actionBtns ? (
                        <div className='d-flex align-items-center'>
                            {actionBtns}
                        </div>
                    ) : (
                        <Link
                            to={`/news/${id}`}
                            className='text-uppercase text-decoration-none news-item--link'
                        >
                            Read More{' '}
                            <i className='lnr lnr-chevron-right ml-1'></i>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardNews;
