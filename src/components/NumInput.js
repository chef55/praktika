import React from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { update } from '../slices/inout';
  
  function NumInput(props){
    const dispatch=useDispatch();
    let current=JSON.parse(JSON.stringify(useSelector((state)=>state.inout.value)))
    return(
      <>
      <input className="input_style" type="number" defaultValue={0} id={props.input_id} onBlur={(event)=>{
        current[props.input_id]=event.target.value
        dispatch(update(current))
      }}></input>
      </>
    );
  }
  export default NumInput
