import '../App.css';
import React from 'react'
import NumInput from './NumInput';

function InputQuarter(props){
    return(
      <div className="half_wrapper center">
        <div>Значения</div>
        {props.input_ids.map(
          (val)=>
            <NumInput input_id={val} id/>
          )}
      </div>
    )
  }

  export default InputQuarter