import '../App.css';
import React from 'react'
import FakeInput from './FakeInput';

function UnitQuarter(props){
    return(
      <div className="half_wrapper center">
        <div>Ед. изм.</div>
        {props.value_array.map(
          (val)=>
            <FakeInput value={val} active={props.active}/>
          )}
      </div>
    )
  }
  
  export default UnitQuarter