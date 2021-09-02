import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../../parts/footer/Footer';

const Weather = () => {
    const notify = () => toast('weather updated successfully');

    return (
        <>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default Weather;
