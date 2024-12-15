import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import AddRoom from './components/AddRoom'
import RoomInside from './components/RoomInside'
import Products from './components/Products'

function App() {
  const [rooms, setRooms]= useState([])
  const [products, setProducts]= useState([])

  function add(name, color, roomSelect){
    let temp = {name, color, roomSelect}
    setRooms([...rooms, temp])
    
  }

  function productAdd(product){

    if(products.length >= 5){
      return alert("Error");
    }

    if (product === "stereo" && products.length >= 1) {
      return alert("Error")
    
    }
    let temp = {product}
    setProducts([...products, temp])
  }
  console.log(products);
  
  return (
    <>
    <Routes>
      <Route path='/addroom' element={<AddRoom add={add} />} />
      <Route path='/' element={<Home rooms={rooms} />} />
      <Route path='/room/:name' element={<><RoomInside rooms={rooms} productAdd={productAdd} products={products}/> <Products products={products} /> </>} />

    </Routes>
    
    </>
  )
}

export default App
