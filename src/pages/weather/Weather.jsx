import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Weather = () => {
    const notify = () => toast('weather updated successfully');

    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer />
        </div>
    );
};

export default Weather;
