import React, { useEffect, useState } from "react";
import useData from "../services/useData";
import SearchBar from "./SearchBar";
import CityTemp from "./CityTemp";
import PerHourse from "./PerHourse";

function Card() {

    const [city, setCity] = useState("Banovici");
    const [tempCity, setTempCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const {getCoordinates, getForecast, getWeather} = useData();
    const [temp, setTemp] = useState();
    const [currentDay, setCurrentDay] = useState(null);
    const [listDay, setList] = useState([]);

  //  console.log(weatherData);

  useEffect(() => {
    if(city.trim() !== '') {
        getCoordinates(city)
        .then(response => {
            const {lat, lon} = response.data[0];
            return getForecast(lat, lon);
          })
          .then(response => {
            setWeatherData(response.data);
            setTemp(response.data.list[0].main.temp-271);
            setList(response.data.list.slice(0,6))
            setCurrentDay(response.data.list[0]);
        })
        .catch(err => {
            console.log(err);
        })
    }
  }, [city]);

  const handleCity = () => {
    setCity(tempCity);
  }

  return (
    <div className="h-screen flex justify-center items-center bg-cover" style={{backgroundImage: `url(/img/${currentDay && currentDay.weather[0].main}.jpg)`}}>
      <div className="w-[500px] h-[300px]">
        <div className="">
         <SearchBar setTempCity={setTempCity} handleCity={handleCity}/>
        </div>

        <div className="">
          <CityTemp temp={temp} city={city} currentDay={currentDay}/>
        </div>

        <div className="flex justify-between p-2  h-[150px]">
            {listDay.map((day, index) => {
              return <PerHourse key={index} day={day}/>
            })}
        </div>
      </div>
    </div>
  );
}

export default Card;
