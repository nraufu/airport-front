import React from 'react';
import visitRwandaImg from '../../assets/images/visit-rwanda.png';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';
import image8 from '../../assets/images/image8.jpg';
import image9 from '../../assets/images/image9.jpg';

const VisitRwanda = () => {
    const pictures = [
        {
            alt: 'visit-rwanda',
            img: image7,
        },
        {
            alt: 'visit-rwanda',
            img: image6,
        },
        {
            alt: 'visit-rwanda',
            img: image8,
        },
        {
            alt: 'visit-rwanda',
            img: image9,
        },
    ];

    return (
        <div className='container visit-rwanda'>
            <div className='row'>
                <div className='col-lg-6 info-text align-self-center'>
                    <div className='text-center mb-5'>
                        <img
                            src={visitRwandaImg}
                            alt='visit-rwanda'
                            className='img-fluid'
                        />
                    </div>

                    <p className='mb-5'>
                        Known as the land of a thousand hills, Rwanda’s stunning
                        scenery and warm, friendly people offer unique
                        experiences in one of the most remarkable countries in
                        the world. It is blessed with extraordinary
                        biodiversity, with incredible wildlife living throughout
                        its volcanoes, montane rainforest and sweeping plains.
                    </p>

                    <a
                        href='https://www.visitrwanda.com/'
                        className='link link-primary'
                    >
                        Discover More &rarr;
                    </a>
                </div>

                <div className='col-lg-6 position-static'>
                    <div className='photo-grid'>
                        {pictures.map((picture, index) => (
                            <div className='photo-item' key={index}>
                                <img src={picture.img} alt={picture.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitRwanda;
