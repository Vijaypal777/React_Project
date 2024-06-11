import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword]=useState("")

  //useRef hook

  const passwordRef=useRef(null)


  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed)str+="0123456789"
    if(charAllowed)str+="!@#$%^&*(){}"

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()* str.length+1)
      pass +=str.charAt(char)      
    }
    setPassword(pass)


  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,69);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed, passwordGenerator])


  return (
    <>
      {/* <h1 className="text-4xl text-center text-white ">Paswword Genertor</h1> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg PX-4 MY-8 text-orange-600 bg-gray-300">
        <h1 className="text-4xl text-center text-white my-4">Paswword Genertor</h1>
        <div className="flex-shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password} 
          className="outline-none w-full py-1 px-3" 
          placeholder="password" 
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} className="bg-blue-500 outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={70}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
             />
             <label>Lenght:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          
            </div>
            <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='chracterInput'
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }}
             />
             <label htmlFor="chracterInput">Chracters</label>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
