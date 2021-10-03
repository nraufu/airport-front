import moment from 'moment';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../../parts/Footer/Footer';
import { newsActions } from '../../store/actions/news';

const ViewNews = ({ match, loadNews, currentNews }) => {
    useEffect(() => {
        const id = match.params.id;
        loadNews(id);
    }, [loadNews, match.params.id]);

    return (
        <>
            <div className='container spacing-sm single-news'>
                <div className='header  text-center'>
                    <h2 className='text-black title'>{currentNews.title}</h2>

                    <ul className='sharing-links'>
                        <li className='facebook social-box'>
                            <a href='https://facebook.com'>
                                <span className='icon-wrapper'>
                                    {' '}
                                    <i className='fa fa-facebook-f'></i>
                                </span>
                                <span className='txt d-none d-md-inline'>
                                    Share post
                                </span>
                            </a>
                        </li>

                        <li className='twitter social-box'>
                            <a href='https://twitter.com'>
                                <span className='icon-wrapper'>
                                    {' '}
                                    <i className='fa fa-twitter'></i>
                                </span>
                                <span className='txt d-none d-md-inline'>
                                    Share post
                                </span>
                            </a>
                        </li>

                        <li className='instagram social-box'>
                            <a href='https://instagram'>
                                <span className='icon-wrapper'>
                                    {' '}
                                    <i className='fa fa-instagram'></i>
                                </span>
                                <span className='txt d-none d-md-inline'>
                                    Share post
                                </span>
                            </a>
                        </li>
                    </ul>

                    <p>
                        Published on :{' '}
                        <span className='text-muted'>
                            {moment(currentNews.createdAt).format(
                                'MMMM Do YYYY'
                            )}
                        </span>
                    </p>
                </div>

                <div className='img-wrapper'>
                    <img src={currentNews.img} alt='news' />
                </div>

                <p className='py-5 body-text'>{currentNews.body}</p>
            </div>
            <Footer />
        </>
    );
};

const mapDispatchToProps = {
    loadNews: newsActions.getSingle,
};

const mapStateToProps = ({ newsState }) => {
    return {
        currentNews: newsState.singleNews,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewNews);
