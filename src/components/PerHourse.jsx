import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function PerHourse({ day , index}) {
  let thisDay = day.main.temp-271;
  let weather = day.weather[0].main;
  let sliceDay = thisDay.toFixed(0);
  const icon = day.weather[0].icon;
  const imgUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  const date = new Date(day.dt * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Povećajte sat za 3 sata svaki put
  if (hours < 21) {
    hours += 3;
  } else {
    hours = (hours + 3) % 24; // Ako je veće od 21 sati, vraćamo se na 00:00
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white'> <FontAwesomeIcon icon={faClock} /> {(hours < 10 ? '0' : '') + hours}:{(minutes < 10 ? '0' : '') + minutes}</h1>
      <img src={imgUrl} alt="" />
      <h1 className='text-white font-bold'>{sliceDay} &#x2103;</h1>
      <h1 className='text-sm mt-2 text-white font-bold'>{weather}</h1>
    </div>
  );
}

export default PerHourse;
