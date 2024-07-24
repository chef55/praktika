import React from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { update,updateReady } from '../slices/inout';
import checkInput from "./checkInput"
import ErrorDescription from './ErrorDescription';
  
  function NumInput(props){
    const ready=useSelector(state=>state.inout.ready)
    const dispatch=useDispatch();
    return(
      <div style={{position: "relative"}}>
      <input className="input_style" type="number" defaultValue={props.value} id={props.input_id} onFocus={(event)=>{event.target.select()}}
      onBlur={(event)=>{
        let state=checkInput(event.target.id,parseFloat(event.target.value))
        dispatch(update({name:props.input_id,value:parseFloat(event.target.value)}))
        if(state!="good"){
          event.target.classList.add("input_style_error")
          dispatch(updateReady({name:event.target.id,value:state}))
        }
        else{
          event.target.classList.remove("input_style_error")
          dispatch(updateReady({name:event.target.id,value:state}))
        }
      }}></input>
      {ready[props.input_id]!="good"?<ErrorDescription value={ready[props.input_id]}/>:<></>}
      </div>
    );
  }
  export default NumInput
