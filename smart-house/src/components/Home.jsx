import React from 'react'
import AddRoom from './AddRoom'
import { useNavigate } from 'react-router-dom'
import Title from './Title'
import RoomList from './RoomList'

export default function Home({rooms}) {
  
  const nav = useNavigate()
  return (
    <div>
        < Title />
        <RoomList rooms={rooms} />
        <button style={{marginTop: "50px"}} onClick={() => nav('addroom')}>+</button>
 
    </div>
  )
}
