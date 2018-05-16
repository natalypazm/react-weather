import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './style.css';

const WeatherData = ({holi}) => {
    const{temperature,weatherState,humidity,wind} = holi;
    return(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature = {temperature} weatherState ={weatherState} />
        <WeatherExtraInfo humidity = {humidity} wind = {wind} />
    </div>);
};

WeatherData.propTypes = {
    holi: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind:PropTypes.string.isRequired,

    }),
};


export default WeatherData;