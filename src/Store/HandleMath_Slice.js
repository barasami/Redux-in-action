import { createSlice } from "@reduxjs/toolkit";

const mathSlice=createSlice({
    name:'mathslice',
    initialState:{
        Ans:0,
    },
    reducers:{
        Add (state,action) {
           state.Ans=action.payload

        },
        Multiply (state,action) {
            state.Ans=action.payload

        },
        Subtract (state,action) {
            state.Ans=action.payload
        }
    }
})

export const mathSliceActions=mathSlice.actions
export default mathSlice