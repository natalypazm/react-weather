import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import{SUN, CLOUDY, WINDY} from './../../constants/weather';
import './style.css';

const location = "Arequipa,pe";
const api_key= "d77b4273256512b78f29f6a143fe20dc";
const api_weather=`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
    temperature:20,
    weatherState:CLOUDY,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state ={
            city: "Perú",
            data: data1
        };
    }
    getTemp = kelvin => {
        return convert(kelvin).from('K').to('C').toFixed(2);
    }

    getWeatherState = weather => {
        return CLOUDY;
    }

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const{speed} = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);
        const temperature = this.getTemp(temp);
        const data = {
            humidity,
            temperature:temp,
            weatherState,
            wind:`${speed} m/s`,
        }
        return data;
    };

    handleUpdateClick = () =>{
        fetch(api_weather).then(data =>{
            console.log(data);
                return data.json();
        }).then(weather_data =>{
            const data= this.getData(weather_data);
            this.setState({data});
            console.log(weather_data);
        });
        console.log("actualizado");
    }


    render = () => {
        const{city, data} = this.state;
        return(
        <div className='weatherLocationCont'>
            <Location city ={city}/>
            <WeatherData holi={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
};
};

export default WeatherLocation;