import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, btnLabel, description, icon, link }) => {
    return (
        <div className='card'>
            <div className='card__icon'>
                <i className={icon}></i>
            </div>

            <div className='card__body'>
                <h4 className='title'>{title}</h4>
                <p className='description'>{description}</p>
                <Link to={link} className='btn btn-primary'>
                    {btnLabel}
                </Link>
            </div>
        </div>
    );
};

export default Card;
