import React from 'react'
import { useState } from 'react'
import {app} from '../firebase'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const auth =getAuth(app)


function Signup() {
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email, password).then(value=>alert("success"))
    }

  return (
    <div className='signup-page'>
        <h1>Signup Page</h1>
        <label>Email</label>
        <input 
        onChange={(e)=> setEmail(e.target.value)}
        value={email}
        type='email'
        required 
        placeholder='Enter Your Gmail here'/>

        <label>Password</label>
        <input 
         onChange={(e)=> setPassword(e.target.value)}
         value={password}
        type='password' required placeholder='Enter Your Password here'/>

        <button onClick={createUser}>Sign Up </button>
    </div>
  )
}

export default Signup