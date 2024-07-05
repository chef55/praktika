import '../App.css';
import React from 'react'
import {useSelector} from "react-redux"

function OutFakeInput(props){
    const inout=useSelector((state)=>state.inout.value)
    return(
      <>
      {props.active==1
        ?<div className="input_style input_padding">{inout[props.id]}</div>
        :<div className="input_style input_padding input_inactive">{inout[props.id]}</div>
      }
      </>
    )
  }

  export default OutFakeInput