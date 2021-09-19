import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import InfoBox from '../Info-Box/InfoBox';
import { arrivalActions } from '../../store/actions/arrivals';
import { departureActions } from '../../store/actions/departures';

const Banner = ({
    title,
    bannerImg,
    classNames,
    arrivals,
    departures,
    loadArrivals,
    loadDepartures,
}) => {
    const bannerClass = classnames('banner', {
        [classNames]: classNames,
    });

    useEffect(() => {
        loadArrivals();
        loadDepartures();
    }, [loadArrivals, loadDepartures]);

    return (
        <div
            className={bannerClass}
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className='container d-flex align-items-center justify-content-between'>
                <h1 className='title text-white'>{title || ''}</h1>
                <InfoBox arrivals={arrivals} departures={departures} />
            </div>
        </div>
    );
};

const mapStateToProps = ({ departuresState, arrivalsState }) => {
    return {
        arrivals: arrivalsState.arrivals,
        departures: departuresState.departures,
    };
};

const mapDispatchToProps = {
    loadArrivals: arrivalActions.getAll,
    loadDepartures: departureActions.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
