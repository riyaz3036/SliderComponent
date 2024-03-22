import React, { useState } from 'react';
import '../Styles/Slider1.css'

function Slider1(props) {
  

const [value, setValue] = useState(0); 
const { handleSize,status,val } = props;

//for dots inside the slider
const handleSizeNumber = parseInt(handleSize);
const halfHandleSize = handleSizeNumber / 2;

console.log(val);

  return (
  <div>

    
    <div className="slider__">
        
    <input type="range" 
         min="0" 
         max="100" 
         onChange={(e) => setValue(e.target.value)} 
        value={value}
        className="slider"
    />

    <div style={{ left: `${value}%` ,width:halfHandleSize,height:halfHandleSize }} className={`slider__thumb${status === 'hover' ? '_hov' : ''}${status === 'focus' ? '_foc' : ''}`}>
      <div className="tooltip" >{value * (val/100)}</div>
    </div>

    <div style={{ width: `${value}%` }} className="progress"></div>

    

    </div>

  
  </div>
  );
}

export default Slider1;