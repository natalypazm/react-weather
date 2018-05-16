import React, { Component } from 'react';
import WehaterLocation from './components/WeatherLocation'
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default WeatherLocation;
