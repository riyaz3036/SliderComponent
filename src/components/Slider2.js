import React, { useState } from 'react';
import '../Styles/Slider2.css'

function Slider2(props) {

const [value1, setValue1] = useState(0); 
const [value2, setValue2] = useState(0); 

const leftPosition = Math.min(value1, value2);
const rightPosition = Math.max(value1, value2);

//for dots inside the slider
const { handleSize,status,val} = props;
const handleSizeNumber = parseInt(handleSize);
const halfHandleSize = handleSizeNumber / 2;



  return (
  <div>

  
    <div className="slider__2">
        
    <input type="range" 
         min="0" 
         max= "100" 
         onChange={(e) => setValue1(e.target.value)} 
        value={value1}
        className="slider_a"
    />
    <input type="range" 
         min="0" 
         max= "100" 
         onChange={(e) => setValue2(e.target.value)} 
        value={value2}
        className="slider_b"
    />

    <div  style={{ left: `${value1}%`,width:halfHandleSize,height:halfHandleSize }} className={`slider__thumb_a${status === 'hover' ? '_hov' : ''}${status === 'focus' ? '_foc' : ''}`}>
      <div className="tooltip_a" >{value1 * (val/100)}</div>
    </div>

    <div  style={{ right: `${100 - value2}%`,width:halfHandleSize,height:halfHandleSize }} className={`slider__thumb_b${status === 'hover' ? '_hov' : ''}${status === 'focus' ? '_foc' : ''}`}>
      <div className="tooltip_b" >{value2 * (val / 100)}</div>
    </div>

    <div style={{ left: `${leftPosition}%`, right: `${100-rightPosition}%` }} className="progress2"></div>

    

    </div>

  
  </div>
  );
}

export default Slider2;