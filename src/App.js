import React from 'react'
import './App.css'
import Slider1 from './components/Slider1.js'
import Slider2 from './components/Slider2.js'
import Slider3 from './components/Slider3.js'


function App() {
  return (
    <div className="main__">
      <h2>
        Hello There!! This is <span>Riyaz Ahmed</span> 
      </h2>

      <p>I have created a Slider component as per all the mentioned description. 
        Kindly follow the steps in th README file to test it out. Thank you!!
      </p>
      
      <Slider1 />
      <Slider2 />
      <Slider3 />
      
    </div>
  );
}

export default App;
