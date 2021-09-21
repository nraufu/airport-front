import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components/UI/';
import { AddNewsModal } from './modals';
import CardNews from '../../../components/NewsComponent.jsx/CardNews';
import { newsActions } from '../../../store/actions/news';

const NewsList = ({ news, fetchNews }) => {
    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    return (
        <>
            <div className='d-flex justify-content-between align-items-center admin-news--header'>
                <h1 className='mb-0'>News</h1>
                <Button
                    label='Add News'
                    className='btn btn-outline-success'
                    icon='lnir lnir-plus'
                    onClick={() => AddNewsModal()}
                />
            </div>

            <div className='admin-news--content'>
                <div className='container'>
                    <div className='row'>
                        {news.map((newsItem, index) => (
                            <CardNews
                                key={index}
                                id={newsItem._id}
                                thumbnail={newsItem.thumbnail}
                                title={newsItem.title}
                                description={newsItem.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = ({ newsState }) => {
    return {
        news: newsState.news,
    };
};

const mapDispatchToProps = {
    fetchNews: newsActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
