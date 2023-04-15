import { createSlice } from "@reduxjs/toolkit";

const mathSlice=createSlice({
    name:'mathslice',
    initialState:{
        Ans:0
    },
    reducers:{
        Add (state,action) {
           console.log('hello add');

        },
        Multiply (state,action) {
            console.log('hello multiply');

        },
        Subtract (state,action) {
                console.log('hello subtract');
        }
    }
})

export const mathSliceActions=mathSlice.actions
export default mathSlice