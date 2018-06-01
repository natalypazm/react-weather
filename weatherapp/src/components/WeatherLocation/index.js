import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import{SUN, CLOUDY, WINDY} from './../../constants/weather';
import './style.css';

const data1 = {
    temperature:20,
    weatherState:SUN,
    humidity: 10,
    wind: '10 m/s',
}


const data2 = {
    temperature:10,
    weatherState:CLOUDY,
    humidity: 40,
    wind: '20 m/s',
}
class WeatherLocation extends Component{

    constructor(){
        super();
        this.state ={
            city: "Perú",
            holi: data1
        };
    }

    handleUpdateClick = () =>{
        this.setState({
            holi: data2
        });
        console.log("actualizado");
    }


    render = () => {
        const{city, holi} = this.state;
        return(
        <div className='weatherLocationCont'>
            <Location city ={city}/>
            <WeatherData holi={holi} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>);
};
};

export default WeatherLocation;