import React, { useState } from 'react';
import '../Pages/MostViewPages/mostviewpage.scss';

const ColorSelection = () => {
  const [selectColor, setSelectColor] = useState("blue");

  const handleChangeColor = (color) => {
    setSelectColor(color);
  };


   
  

  return (
    <div className='color-selection'>
      {selectColor === "red" ? (<img src='nikeairforce.png'></img>) : 
      selectColor === "blue" ? (<img src='bluejordan.png'></img>) :
      selectColor === "green" ? (<img src='greenjordan.png' />) : ""
     }
     <div className='buttons'>
     <button id='red' onClick={() => handleChangeColor("red")}>Red</button>
     <button id='blue' onClick={() => handleChangeColor("blue")}>Blue</button>
     <button id='green' onClick={() => handleChangeColor("green")}>Green</button>
     </div>
    </div>
  );
};

export default ColorSelection;
