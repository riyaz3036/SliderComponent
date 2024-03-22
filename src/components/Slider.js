import React from 'react'
import PropTypes from "prop-types"
import Slider1 from './Slider1'
import Slider2 from './Slider2'
import Slider3 from './Slider3'


function Slider({label,handleSize,status,Value}) {

    
//continous
if(label==="continous"){
    return (
        <Slider1 
        handleSize={handleSize}
        status={status}
        val={Value}
        />
    )
}

//discrete
if(label==="discrete"){
    return (
        <Slider3 
        handleSize={handleSize}
        status={status}
        val={Value}
        />
    )
}

//range
if(label==="range"){
    return (
        <Slider2
        handleSize={handleSize}
        status={status}
        val={Value}
        />
    )
}


}



//prop types for documentation
Slider.propTypes = {

    label : PropTypes.oneOf(["continous", "discrete","range"]),
    status: PropTypes.oneOf(["default", "hover", "focus"]),
    handleSize: PropTypes.oneOf(["24px","32px"]),
    Value: PropTypes.number,
    
}



export default Slider;