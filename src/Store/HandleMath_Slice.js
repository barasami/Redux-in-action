import { createSlice } from "@reduxjs/toolkit";

const mathSlice=createSlice({
    name:'mathslice',
    initialState:{
        Ans:0
    },
    reducers:{
        Add (state,action) {
           const numb1=action.payload;
           const numb2=action.payload;
           state.Ans=numb1 + numb2

        },
        Multiply (state,action) {
            const numb1=action.payload;
            const numb2=action.payload;
            state.Ans=numb1 * numb2

        },
        Subtract (state,action) {
            const numb1=action.payload;
            const numb2=action.payload;
            state.Ans=numb1 - numb2
        }
    }
})

export const mathSliceActions=mathSlice.actions
export default mathSlice