import { useState, useEffect } from 'react';
import WeatherDay from './WeatherDay';

const Weather = () => {
    const [weatherInfo, setWeatherInfo] = useState();

    const padNum = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    useEffect(() => {
        fetch(
            'https://dataservice.accuweather.com/forecasts/v1/daily/5day/293211?apikey=Yf3WKj1TwqWvjAKmBjtqR40z0gwW8kQw'
        )
            .then((response) => response.json())
            .then((data) => {
                return setWeatherInfo(
                    data.DailyForecasts.map((item) => {
                        return {
                            min: item.Temperature.Minimum.Value,
                            max: item.Temperature.Maximum.Value,
                            weatherType: item.Day.IconPhrase,
                            weatherKey: padNum(item.Day.Icon),
                            date: item.Date,
                        };
                    })
                );
            });
    }, []);

    return (
        <>
            <div className='forecast-container position-relative'>
                {weatherInfo &&
                    weatherInfo.map((item, index) => (
                        <WeatherDay key={index} {...item} />
                    ))}
            </div>
        </>
    );
};

export default Weather;
