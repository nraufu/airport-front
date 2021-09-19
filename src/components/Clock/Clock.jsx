import { useEffect, useState } from 'react';

const Clock = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const hours = new Date().getHours();
            const minutes = new Date().getMinutes();

            setHours(hours);
            setMinutes(minutes);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    let time = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return (
        <div className='clock'>
            <span className='time'>{time}</span>
        </div>
    );
};

export default Clock;
