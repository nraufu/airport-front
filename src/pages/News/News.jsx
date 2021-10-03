import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardNews from '../../components/NewsComponent.jsx/CardNews';
import { newsActions } from '../../store/actions/news';
import Loading from '../../components/Loading/Loading';
import Footer from '../../parts/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import bannerImg from '../../assets/images/news-bgimg.jpg';

const News = ({ fetchNews, news }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            await fetchNews();
            setIsLoading(false);
        }
        fetchData();
    }, [fetchNews]);

    return isLoading ? (
        <Loading />
    ) : (
        <>
            <Banner title='Latest News' bannerImg={bannerImg} />
            <div className='container spacing-sm'>
                <div className='row justify-content-center align-items-center'>
                    {news.map((item, index) => {
                        return <CardNews key={index} {...item} />;
                    })}
                    {news.length === 0 && (
                        <h1 className='text-center'>
                            No Updates currently available
                        </h1>
                    )}
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
