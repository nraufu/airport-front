import { Fragment } from 'react';
import hero from '../../assets/images/hero.png';
import ImageLibrary from './../../parts/Gallery/Gallery';

const Home = () => {
    return (
        <Fragment>
            <div
                className='hero'
                style={{ backgroundImage: `url(${hero})` }}
            ></div>
            <ImageLibrary />
        </Fragment>
    );
};

export default Home;
