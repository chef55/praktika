import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from "../slices/inout.js"
function Button(props){
    const dispatch=useDispatch();
    const current=useSelector(state=>state.inout.value)
    const ready=useSelector(state=>state.inout.ready)
    const check_ready=(ready)=>{
      let out=true
      Object.entries(ready).map((val)=>{
        if(val[1]!="good") {
          out=false
          return
        }
      })
      return out
    }
    return(
      <div className={check_ready(ready)?"calculate_button center":"calculate_button center calculate_button_inactive"} id="calc_button"
      onClick={()=>{
        check_ready(ready)? dispatch(fetchData(current))
        :window.alert("Не все данные введены корректно");
      }}
      >{props.value}</div>
    )
  }
  export default Button
