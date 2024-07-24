import React from 'react'
import ParameterHalf from './ParameterHalf';
import InputHalf from './InputHalf';

function InputBlock(props){
    return(
      <div className="block_wrapper">
        <div className="table_text">{props.table_text}</div>
        <div className="block_inner_wrapper">
          <ParameterHalf parameter_array={props.parameter_array}/>
          <InputHalf
            unit_array={props.unit_array}
            input_array={props.input_array}
            input_ids={props.input_ids}
            input_values={props.input_values}
          />
        </div>
      </div>
    )
  }
  export default InputBlock
