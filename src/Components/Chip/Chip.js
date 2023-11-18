import React from "react"
import { X } from "react-feather"
import  './Chip.css'
function Chip(props) {
  return (
    <div className="Chip" style={{backgroundColor:props.color}}>
        {props.text}
        {props.close && <X onClick={props.onClose? props.onClose() :""}/>}
    </div>
  );
}

export default Chip;