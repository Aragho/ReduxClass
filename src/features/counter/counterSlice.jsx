import {createSlice} from "@reduxjs/toolkit";

const initialState = {value : 0};

export const  counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment :(state)=>{
            state.value += 1; //immer : doing it as it is suppose to be,it manipulate it directly but immer is doing it properly
        },
        decrement :(state)=>{
            state.value -= 1;
        },
        reset :(state)=>{
            state.value = 0;// the counter should turn to 0
        }
    }
})

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;