import { createSlice } from "@reduxjs/toolkit";

const mathSlice=createSlice({
    name:'mathslice',
    initialState:{
        Ans:0
    },
    reducers:{
        Add (state,action) {
           console.log('hey'); 

        },
        Multiply (state,action) {

        },
        Subtract (state,action) {

        }
    }
})

export const mathSliceActions=mathSlice.actions
export default mathSlice