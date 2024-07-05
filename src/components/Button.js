import React from 'react'
import { useDispatch } from 'react-redux';
import { calculate } from '../slices/inout';

function Button(props){
    const dispatch=useDispatch();
    return(
      <div className="calculate_button center" id="calc_button"
      onClick={()=>{
        dispatch(calculate())
      }}
      >{props.value}</div>
    )
  }
  export default Button
