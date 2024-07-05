import '../App.css';
import React from 'react'

function FakeInput(props){
    return(
      <>
      {props.active==1
        ?<div className="input_style input_padding">{props.value}</div>
        :<div className="input_style input_padding input_inactive">{props.value}</div>
      }
      </>
    )
  }

  export default FakeInput