import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoomInside from './RoomInside'

export default function Room({name, color, roomSelect}) {
  const nav = useNavigate();
  console.log(name);
  
  return (
      <div className='roomNav' onClick={()=> nav(`/room/${name}`, { state: { name, roomSelect } })} style={{backgroundColor: color, padding: "10px", borderRadius: "10px", cursor: "pointer"}}>
        <h2>{name}</h2>
    </div>
    
    
  )
}
