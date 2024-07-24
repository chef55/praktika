import React from 'react'
import OutFakeInput from './OutFakeInput';

function OutputQuarter(props){
    return(
      <div className="half_wrapper center">
        <div>Ед. изм.</div>
        {props.id_array.map(
          (val)=>
            <OutFakeInput id={val} active={props.active}/>
          )}
      </div>
    )
  }
  export default OutputQuarter
