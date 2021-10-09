const PrintInfo = () => {
    //get current date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateString = `${day}/${month}/${year}`;

    //get current time
    const hours = date.getHours();
    const minutes = date.getMinutes();
    let timeString = `${hours}:${minutes}`;

    if (hours < 10) {
        timeString = `0${hours}:${minutes}`;
    }
    if (minutes < 10) {
        timeString = `${hours}:0${minutes}`;
    }

    return (
        <div className='print-header__info'>
            <p className='mb-0'>
                <strong>Date : {dateString}</strong>
            </p>
            <p className='mb-0'>Printed By : Admin</p>
            <p className='mb-0'>
                Printed at : {dateString} {timeString}
            </p>
        </div>
    );
};

export default PrintInfo;
