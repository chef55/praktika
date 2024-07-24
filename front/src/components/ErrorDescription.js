import React from 'react'
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { update } from '../slices/inout';
  
  function ErrorDescription(props){
    const current=useSelector(state=>state.inout.ready)
    const dispatch=useDispatch();
    return(
      <>
        <div className='error_exclamation'>!</div>
        <div className='error_message'>{props.value}</div>
      </>
    );
  }
  export default ErrorDescription