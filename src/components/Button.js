import '../App.css';
import React from 'react'
import { useDispatch } from 'react-redux';
import { calculate } from '../slices/inout';
import { currentValues } from './NumInput';

function Button(props){
    const dispatch=useDispatch();
    return(
      <div className="calculate_button center" id="calc_button"
      onClick={()=>{
        dispatch(calculate({
          L: currentValues.L,
          Dvn: currentValues.Dvn,
          dst: currentValues.dst,
          Kekv: currentValues.Kekv,
          Kto: currentValues.Kto,
          Kef: currentValues.Kef,
          Tos: currentValues.Tos,
          Pvh: currentValues.Pvh,
          Tvh: currentValues.Tvh,
          Q: currentValues.Q,
  }))
      }}
      >{props.value}</div>
    )
  }
  export default Button