import { configureStore } from "@reduxjs/toolkit";
import mathSlice from "./HandleMath_Slice";

const store=configureStore({
    reducer:{
      mathslice:mathSlice.reducer  

    }
})
export default store