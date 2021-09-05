import React from 'react';
import SingleNews from './SingleNews';

const News = ({ data }) => {
    return (
        <div className='container'>
            <div className='row'>
                {data.map((item, index) => {
                    return <SingleNews key={index} {...item} />;
                })}
            </div>
        </div>
    );
};

export default News;
