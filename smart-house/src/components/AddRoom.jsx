import React, { useState } from 'react'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

export default function AddRoom({ add }) {

  const nav= useNavigate();
  const [roomSelect, setRoomSelect]= useState("bedroom")
  const [name, setName]= useState("")
  const [color, setColor]= useState("")

  function checkParameters(){
    if(name.length === 0 || color.length === 0){
      alert("Error");
      nav('/');
    }
    else if(name.length > 0 || color.length > 0){
      add(name, color, roomSelect)
      nav('/');
    }
  }
  
  return (
    <div>
      < Title />
      <label>Select room:</label>
      <br />
      <select value={roomSelect} onChange={e => {setRoomSelect(e.target.value)}}>
        <option value="bedroom">Bedroom</option>
        <option value="bathroom">Bathroom</option>
        <option value="kitchen">Kitchen</option>
      </select>
      <br />
      <label>Room name:</label>
      <br />
      <input type="text" value={name} maxLength={9}  onChange={e => setName(e.target.value)} />
      <br />
      <label>Room color:</label>
      <br />
      <input type="text" onChange={e => setColor(e.target.value)} />
      <br />

      <button onClick={checkParameters}>Create room</button>
    </div>
  )
}
