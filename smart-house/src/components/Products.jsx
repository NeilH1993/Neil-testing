import React, {useState, useEffect} from 'react'

export default function Products({ products }) {
  const [chooseColor, setChooseColor] = useState(() => {
    const savedColors = localStorage.getItem("chooseColor");
    if (savedColors) {
      return JSON.parse(savedColors);
    } else {
      return products.map(() => "red");
    }
  });
    
  function changeColor(index) {
    const newColors = [...chooseColor];
    if (newColors[index] === "red") {
      newColors[index] = "green";
    } else {
      newColors[index] = "red";
    }
    setChooseColor(newColors);
  }

  useEffect(() => {
    localStorage.setItem("chooseColor", JSON.stringify(chooseColor));
  }, [chooseColor]);
    
  return (
<div style={{ display: 'flex', gap: "10px", alignItems: "flex-start", marginTop: "30px" }}>
  {products.map((el, index) => (
    <div onClick={() => changeColor(index)} key={index} style={{ backgroundColor: chooseColor[index] || 'red', borderRadius: "10px", cursor: "pointer", minWidth: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
        {el.product}
      </div>
  ))}
</div>

  )
}
