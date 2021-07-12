import { Fragment } from 'react';
import hero from '../../assets/images/hero.png';

const Home = () => {
    return (
        <Fragment>
            <div
                className='hero'
                style={{ backgroundImage: `url(${hero})` }}
            ></div>
        </Fragment>
    );
};

export default Home;
