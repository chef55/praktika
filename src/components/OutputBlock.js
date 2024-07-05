import React from 'react'
import ParameterHalf from './ParameterHalf';
import OutputHalf from './OutputHalf';

function OutputBlock(props){
    return(
      <div className="block_wrapper">
        <div className="table_text">{props.table_text}</div>
        <div className="block_inner_wrapper">
          <ParameterHalf parameter_array={props.parameter_array}/>
          <OutputHalf
            unit_array={props.unit_array}
            id_array={props.id_array}
          />
        </div>
      </div>
    )
  }

  export default OutputBlock
