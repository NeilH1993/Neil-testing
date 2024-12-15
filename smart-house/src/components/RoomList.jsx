import React from 'react'
import Room from './Room'
import RoomInside from './RoomInside'
export default function RoomList({rooms}) {
  
  return (
    <div style={{display: "flex", flexDirection: "row", gap:"10px"}}>
        {rooms.map((el, index) => {
         return <Room key={index} name={el.name} color={el.color} roomSelect={el.roomSelect} /> 
        
        })}

    </div>
  )
}
