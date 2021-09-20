import React from 'react';
import SingleNews from './SingleNews';
import newsImg from '../../assets/images/blue-sky.jpg';

const News = () => {
    const news = [
        {
            img: newsImg,
            title: 'News One',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
        {
            img: newsImg,
            title: 'News Two',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
        {
            img: newsImg,
            title: 'News Three',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
        {
            img: newsImg,
            title: 'News One',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
        {
            img: newsImg,
            title: 'News Two',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
        {
            img: newsImg,
            title: 'News Three',
            description:
                'Check out our newsOrci varius natoque penatibus et magnis dis parturient montes, nascetur',
        },
    ];

    return (
        <div className='container spacing-sm'>
            <div className='row justify-content-center align-items-center'>
                {news.map((item, index) => {
                    return <SingleNews key={index} {...item} />;
                })}
            </div>
        </div>
    );
};

export default News;
