import React from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { update } from '../slices/inout';
  
  function NumInput(props){
    const dispatch=useDispatch();
    return(
      <>
      <input className="input_style" type="number" defaultValue={0} id={props.input_id} onBlur={(event)=>{
        dispatch(update({name:props.input_id,value:event.target.value}))
      }}></input>
      </>
    );
  }
  export default NumInput
