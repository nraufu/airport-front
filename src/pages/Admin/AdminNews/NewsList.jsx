import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, ConfirmationBox } from '../../../components/UI/';
import { AddNewsModal, EditNewsModal } from './modals';
import CardNews from '../../../components/NewsComponent.jsx/CardNews';
import { newsActions } from '../../../store/actions/news';

const NewsList = ({ news, fetchNews, deleteNews }) => {
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
                                actionBtns={[
                                    {
                                        label: 'Edit',
                                        icon: 'lnir lnir-pencil',
                                        className: 'btn text-primary',
                                        onClick: () => EditNewsModal(newsItem),
                                    },
                                    {
                                        label: 'Delete',
                                        icon: 'lnir lnir-trash',
                                        className: 'btn text-danger',
                                        onClick: () =>
                                            ConfirmationBox({
                                                title: 'Confirm deletion',
                                                message: `Are you sure you want to delete ${newsItem.title} ?`,
                                                onYes: async () => {
                                                    const result =
                                                        await deleteNews(
                                                            newsItem._id
                                                        );
                                                    if (result.message) {
                                                        toast.success(
                                                            'News removed successfully'
                                                        );
                                                    } else {
                                                        toast.error(
                                                            'Something went wrong'
                                                        );
                                                    }
                                                },
                                            }),
                                    },
                                ]}
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
    deleteNews: newsActions.remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
