import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from "../slices/inout.js"
function Button(props){
    const dispatch=useDispatch();
    const current=useSelector(state=>state.inout.value)
    return(
      <div className="calculate_button center" id="calc_button"
      onClick={()=>{
        dispatch(fetchData(current))
      }}
      >{props.value}</div>
    )
  }
  export default Button
