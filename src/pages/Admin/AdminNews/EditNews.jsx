import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import NewsForm from './NewsForm';
import { newsActions } from '../../../store/actions/news';
import { toast } from 'react-toastify';

const AddNews = ({ updateNews, loadNews, newsId, currentNews }) => {
    const [result, setResult] = useState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => loadNews(newsId), []);

    const saveNews = async (news) => {
        const response = await updateNews(newsId, {
            title: news.title,
            img: news.img,
            body: news.body,
            description: news.description,
            thumbnail: news.thumbnail,
        });

        if (response) {
            setResult(response);
            toast.success('News updated successfully');
        }
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
