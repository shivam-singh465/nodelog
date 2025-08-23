import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./auth";

const store = configureStore({
    reducer: {
        counter : counterReducer,
    }
})

export default store