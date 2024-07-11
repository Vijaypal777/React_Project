import { useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/Weather'

function App() {

  const weather=useWeather();
  console.log(weather)

  useEffect(()=>{
      weather.fetchCurrentUserLocation()
  },[])

  return (
    <>
     <div className='App'>   
      <h1>Weather Forecast App</h1>
     </div>
     <Input/>
     <Button onClick={weather.fetchData} value="Search"/>
     <Card/>
     <Button  value="Refresh"/>
    </>
  )
}

export default App
