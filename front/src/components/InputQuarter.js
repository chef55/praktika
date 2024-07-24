import React from 'react'
import NumInput from './NumInput';

function InputQuarter(props){
    return(
      <div className="half_wrapper center">
        <div>Значения</div>
        {props.input_ids.map(
          (val,i)=>
            <NumInput input_id={val} id value={props.input_values[i]}/>
          )}
      </div>
    )
  }

  export default InputQuarter
