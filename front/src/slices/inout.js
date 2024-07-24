import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    L: 100,
    d: 1403.5,
    dst: 16.5,
    K: 0.03,
    Ksr: 0.2,
    E: 0.95,
    To: 15,
    Pn: 10,
    Tn: 40,
    q: 100,
    P: '',
    T: '',
  },   
    ready:{
      L: "good",
      d: "good",
      dst: "good",
      K: "good",
      Ksr: "good",
      E: "good",
      To: "good",
      Pn: "good",
      Tn: "good",
      q: "good",
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
      updateReady:(state,action)=>{
        state.ready[action.payload.name]=action.payload.value;
      }
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

  export const { update,updateReady } = ioSlice.actions;
  export default ioSlice.reducer;
