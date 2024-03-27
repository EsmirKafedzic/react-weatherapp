import React from 'react'

function SearchBar({setTempCity, handleCity}) {
  return (
    <div className='flex justify-between items-center'>
       <input
            type="text"
            placeholder="Enter the city name.."
            className="focus:outline-none w-full p-2"
            onChange={(e) => setTempCity(e.target.value)}
          />
          <div className="cursor-pointer bg-white p-2" onClick={handleCity}>Trazi</div>
    </div>
  )
}

export default SearchBar
