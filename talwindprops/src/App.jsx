import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let myObj={
    age:25,
    name:"vijay"
  }

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Vijay project</h1>

      <Card channel="Cutie" btnText="click ME"/>
      <Card channel="Beauty" btnText="visit ME"/>

    </>
  )
}

export default App
