import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
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

  export const fetchData=createAsyncThunk('inout/fetchData',async(arg)=>{
      const response = await axios.post('http://localhost:3001/',arg)
      return response.data
    }
  )

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
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchData.fulfilled, (state, action) => {
          state.value.P = action.payload.P
          state.value.T = action.payload.T
        })
        .addCase(fetchData.rejected, (state, action) => {
          //state.status = 'failed'
          //state.error = action.error.message
        })
    }
  })

  export const { update,calculate } = ioSlice.actions;
  export default ioSlice.reducer;
