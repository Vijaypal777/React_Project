import React from 'react'
import { useWeather } from '../context/Weather'

function Input() {
    const weather =useWeather();
    console.log("weather:", weather)
  return (
    <div>
        <input  
        className='input-field'
        value={weather.searchCity}
        onChange={(e)=> weather.setSearchCity(e.target.value)}
        />
    </div>
  )
}

export default Input 