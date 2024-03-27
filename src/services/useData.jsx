import axios from "axios";
import React, { useEffect, useState } from "react";

const apiKey = "12e096eaf62ba371cdd8965856de30c2";
const baseUrl = "https://api.openweathermap.org/data/2.5";
const baseUrlGeo = "https://api.openweathermap.org/geo/1.0/direct";

function useData(city) {

  const getCoordinates = (city) => {
    return axios.get(`${baseUrlGeo}?q=${city}&appid=${apiKey}`);
  };
  
  const getForecast = (lat, lon) => {
    return axios.get(
      `${baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
    };
    
    
    const getWeather = (city) => {
      return axios.get(`${baseUrl}/weather?q=${city}&appid=${apiKey}`);
      
    }

    return {
      getCoordinates,
      getForecast,
      getWeather,
    };
  
}
export default useData
