import React, { useState } from 'react';
import '../Styles/Slider3.css'

function Slider3(props) {

const [value, setValue] = useState(0); 

//for handle size
const { handleSize,status,val } = props;
const handleSizeNumber = parseInt(handleSize);
const halfHandleSize = handleSizeNumber / 2;

let k=value/10;
let n=10;
//for dots inside the slider
function EquidistantDots() {

  const redDots = n - k;

  const dots =[];
  
  for (let i = 0; i < k; i++) {
    dots.push(<span key={i} className="dot_white"></span>);
  }

  for (let i = 0; i < redDots; i++) {
    dots.push(<span key={k + i} className="dot_green"></span>);
  }

  return (
  <div className="dot_section">
    {dots}     
  </div>
  );
  
}


  return (
  <div>

  
    <div className="slider__3">
        
    <input type="range" 
         min="0" 
         max= "100" 
         onChange={(e) => setValue(e.target.value)} 
        value={value}
        step="10"
        className="slider3"
    />

    <div style={{ left: `${value}%`,width:halfHandleSize,height:halfHandleSize }} className={`slider__thumb3${status === 'hover' ? '_hov' : ''}${status === 'focus' ? '_foc' : ''}`}>
      <div className="tooltip3" >{value * (val/100)}</div>
    </div>

    <div style={{ width: `${value}%` }} className="progress3"></div>

    {EquidistantDots()}
    
    </div>
    
  </div>
  );
}

export default Slider3;