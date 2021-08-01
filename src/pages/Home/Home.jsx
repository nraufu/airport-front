import { Fragment } from 'react';
import hero from '../../assets/images/hero.png';
import Footer from '../../parts/Footer/Footer';

const Home = () => {
    return (
        <Fragment>
            <div
                className='hero'
                style={{ backgroundImage: `url(${hero})` }}
            ></div>
            <Footer />
        </Fragment>
    );
};

export default Home;
