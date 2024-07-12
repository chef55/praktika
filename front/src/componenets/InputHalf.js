import React from 'react'
import UnitQuarter from './UnitQuarter';
import InputQuarter from './InputQuarter';

function InputHalf(props){
    return(
      <div className="half_wrapper second_half">
        <UnitQuarter value_array={props.unit_array} active={1}/>
        <InputQuarter input_ids={props.input_ids}/>
      </div>
    )
  }
  export default InputHalf
