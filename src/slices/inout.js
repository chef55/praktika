import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:{
    L: 0,
    Dvn: 0,
    dst: 0,
    Kekv: 0,
    Kto: 0,
    Kef: 0,
    Tos: 0,
    Pvh: 0,
    Tvh: 0,
    Q: 0,
    P: '',
    T: '',
  } 
}

  export const ioSlice=createSlice({
    name: 'inout',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
      calculate: (state)=>{
        let {L,Dvn,dst,Kekv,Kto,Kef,Tos,Pvh,Tvh,Q,P,T}=state.value
        state.value.P=parseFloat(L)+parseFloat(Dvn)
        state.value.T=parseFloat(dst)-parseFloat(Kekv)
      }
    }
  })

  export const { update,calculate } = ioSlice.actions;
  export default ioSlice.reducer;
