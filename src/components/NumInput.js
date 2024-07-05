import '../App.css';
import React from 'react'

export let currentValues={
    L: 0,
    Dvn: 0,
    dst: 0,
    Kekv: 0,
    Kto: 0,
    Kef: 0,
    Tos: 0,
    Pvh: 0,
    Tvh: 0,
    Q: 0,
  }
  
  function NumInput(props){
    return(
      <>
      <input className="input_style" type="number" defaultValue={0} id={props.input_id} onChange={(event)=>{
        currentValues[props.input_id]=event.target.value
      }}></input>
      </>
    );
  }
  export default NumInput
