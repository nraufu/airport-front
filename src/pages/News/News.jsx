import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardNews from '../../components/NewsComponent.jsx/CardNews';
import { newsActions } from '../../store/actions/news';
import Loading from '../../components/Loading/Loading';
import Footer from '../../parts/Footer/Footer';

const News = ({ fetchNews, news }) => {
    const [isLoading, setIsLoading] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        setIsLoading(true);
        await fetchNews();
        setIsLoading(false);
    }, [fetchNews]);

    return isLoading ? (
        <Loading />
    ) : (
        <>
            <div className='container spacing-sm'>
                <div className='row justify-content-center align-items-center'>
                    {news.map((item, index) => {
                        return <CardNews key={index} {...item} />;
                    })}
                </div>
            </div>
            <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(News);
