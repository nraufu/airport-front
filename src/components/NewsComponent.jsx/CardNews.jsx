import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI';

const CardNews = ({ _id, thumbnail, title, description, actionBtns }) => {
    return (
        <div className='col-lg-4 col-md-6 col-12 pb-30'>
            <div className='card news-item'>
                <img src={thumbnail} className='card-img-top' alt='thumbnail' />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{description}</p>

                    {actionBtns ? (
                        <div className='d-flex align-items-center justify-content-center news-item--action-btns'>
                            {actionBtns.map((item, index) => (
                                <Button
                                    key={index}
                                    title={item.label}
                                    className={item.className}
                                    icon={item.icon}
                                    onClick={item.onClick}
                                />
                            ))}
                        </div>
                    ) : (
                        <Link
                            to={`/news/${_id}`}
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
