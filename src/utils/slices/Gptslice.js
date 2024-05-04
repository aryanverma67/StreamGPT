import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        ToggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
    },
});
export const {ToggleGptSearchView} =gptSlice.actions;
export default gptSlice.reducer