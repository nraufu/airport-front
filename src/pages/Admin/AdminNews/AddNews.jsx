import { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { newsActions } from '../../../store/actions/news';
import NewsForm from './NewsForm';

const AddNews = ({ createNews }) => {
    const [result, setResult] = useState();

    const saveNews = async (news) => {
        const response = await createNews({
            title: news.title,
            img: news.img,
            body: news.body,
            description: news.description,
            thumbnail: news.thumbnail,
        });

        if (response) {
            setResult(response);
            toast.success('News created successfully');
        }
    };

    return (
        <>
            <NewsForm onSave={saveNews} result={result} />
        </>
    );
};

const mapDispatchToProps = {
    createNews: newsActions.create,
};

export default connect(null, mapDispatchToProps)(AddNews);
