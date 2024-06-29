import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/movieSlice";
import gptReducer from"./slices/Gptslice";
import configReducer from "./slices/ConfigSlice.js"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt:gptReducer,
            config:configReducer
        }
    }
);

export default appStore;