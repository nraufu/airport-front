import React from 'react';

const SingleNews = ({ img, title, description }) => {
    return (
        <div className='col-lg-4 col-md-6 col-12 news-item'>
            <a href='/#' className='d-block mb-3'>
                <img
                    src={img}
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

                <a
                    href='/#'
                    className='text-uppercase text-decoration-none news-item--link'
                >
                    Read More <i className='lnr lnr-chevron-right ml-1'></i>
                </a>
            </div>
        </div>
    );
};

export default SingleNews;
