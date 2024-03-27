
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-solid-svg-icons';

function CityTemp({temp, city, currentDay}) {

  const tm = currentDay && Math.round(currentDay.main.temp - 271);
  const today = new Date();
  const date = today.getFullYear() + '.' + (today.getMonth() + 1) + '.' + today.getDate();

  return (
    <div className='flex'>
      <div className="p-3 w-1/2 h-[140px] bg-slate-400 bg-cover flex flex-col justify-between" style={{backgroundImage: `url(/img/${currentDay && currentDay.weather[0].main}.jpg)`}}>
        <h1 className='text-white '> <FontAwesomeIcon icon={faCompass} className='mr-2'/>{city}</h1>
        <h1 className='text-white text-2xl font-bold'> {tm} &#x2103;</h1>
        <h1 className='text-white'>{currentDay && currentDay.weather[0].main}</h1>
      </div>
      <div className="h-[140px] bg-blue-100 bg-opacity-50 w-1/2 p-3" style={{backgroundColor: 'rgba(155, 192, 203, 0.5)'}}>
        <h1 className='font-bold'>Today {date}</h1>
       <div className='mt-5 font-bold'>
       <h1>Wind: <span className='text-white'>{currentDay && currentDay.wind.speed} m/s</span></h1>
        <h1>Pressure: <span className='text-white'> {currentDay && currentDay.main.pressure} mbar </span> </h1>
        <h1>Humidity: <span className='text-white'> {currentDay && currentDay.main.humidity} </span></h1>
       </div>
      </div>
    </div>
  )
}

export default CityTemp;
