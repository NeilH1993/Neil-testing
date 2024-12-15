import React, {useState} from 'react'
import Title from './Title'
import Room from './Room';
import RoomList from './RoomList';
import Products from './Products';
import { useLocation } from 'react-router-dom';

export default function RoomInside({productAdd}) {
  const location = useLocation()
  const { name, roomSelect } = location.state || {};

  const [showForm, setShowForm] = useState(false);
  const [product, setProduct]= useState('stereo');
  function checkProductParameters() {
    
     if(product === "boiler" && roomSelect !== "bathroom"){
      alert("Error")
    } else {
      productAdd(product)
     }
  
  
  }
  return (
    <div>
        <Title />
        <h2>Room name: {name} </h2>
        <h2>Selected room: {roomSelect} </h2>
        <button onClick={()=> setShowForm(true)}>Add product</button>
      <br />
      {showForm && (
        <div style={{marginTop: "20px"}}>
          <label>Select room: </label>

          <select value={product} onChange={e => {setProduct(e.target.value)}}>
            <option value="stereo">Stereo</option>
            <option value="ac">AC</option>
            <option value="boiler">Boiler</option>
            <option value="light">Light</option>
          </select>
        <br />
        <button onClick= {() => {checkProductParameters(); setShowForm(false);}}>Submit</button>
        </div>
      )}
  </div>
  )
}
