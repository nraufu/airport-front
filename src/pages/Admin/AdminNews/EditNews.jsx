import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsForm from './NewsForm';
import { newsActions } from '../../../store/actions/news';

const AddNews = ({ updateNews, loadNews, newsId, currentNews }) => {
    const [result, setResult] = useState();

    useEffect(() => loadNews(newsId), [loadNews, newsId]);

    const saveNews = async (news) => {
        const response = await updateNews({
            title: news.title,
            img: news.img,
            body: news.body,
            description: news.description,
            thumbnail: news.thumbnail,
        });

        if (response) setResult(response);
    };

    return (
        <>
            <NewsForm
                data={{
                    title: currentNews.title,
                    img: currentNews.img,
                    body: currentNews.body,
                    description: currentNews.description,
                    thumbnail: currentNews.thumbnail,
                }}
                onSave={saveNews}
                result={result}
                submitBtnLabel='Update'
            />
        </>
    );
};

const mapDispatchToProps = {
    updateNews: newsActions.update,
    loadNews: newsActions.getSingle,
};

const mapStateToProps = ({ newsState }) => {
    return {
        currentNews: newsState.singleNews,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNews);
