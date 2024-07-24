import React from 'react'
import {useSelector} from "react-redux"
import UnitQuarter from './UnitQuarter';
import OutputQuarter from './OutputQuarter';

function OutputHalf(props){
    const inout=useSelector((state)=>state.inout.value)
    return(
      <div className="half_wrapper second_half">
        {inout.P||inout.T
        ?(<><UnitQuarter value_array={props.unit_array} active={1}/>
        <OutputQuarter id_array={props.id_array} active={1}/></>)
        :(<><UnitQuarter value_array={props.unit_array} active={0}/>
        <OutputQuarter id_array={props.id_array} active={0}/></>)
  }
      </div>
    )
  }

  export default OutputHalf
