import React from 'react';
import WeatherIcons from 'react-weathericons';
import{CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/weather';
import PropTypes from 'prop-types';
import './style.css';

const stateName = weatherState => {
    switch(weatherState){
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
} 

const getWeatherIcon = weatherState => {
    return (<WeatherIcons className='wicon' name={weatherState} size="4x" />)
};    

const WeatherTemperature = ({temperature , weatherState}) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature:PropTypes.number,
    weatherState:PropTypes.string,
}

export default WeatherTemperature;