import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import{SUN, CLOUDY, WINDY} from './../../constants/weather';
import './style.css';

const data2 = {
    temperature:20,
    weatherState:SUN,
    humidity: 10,
    wind: '10 m/s',
}
const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city = {'Perú'} />
        <WeatherData holi={data2} />
    </div>
);

export default WeatherLocation;