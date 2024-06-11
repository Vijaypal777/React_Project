import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()


    // const[data, setData]=React.useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Vijaypal777')
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <>
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers: {data.followers}</div>
    <img src={data.avatar_url} width={300} alt="" />
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}