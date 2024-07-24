import React from 'react'

function ParameterHalf(props){
    return(
      <div className="half_wrapper">
      <div className="left_line left_line_padding">Показатели</div>
      {props.parameter_array.map(
        val=>
          <div className="left_line left_line_margin">{val}</div>
      )}
      </div>
    )
  }
  export default ParameterHalf
