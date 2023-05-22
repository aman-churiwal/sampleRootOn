import { configureStore } from "@reduxjs/toolkit"
import applyReducer from "./slices/applySilce"

export const store = configureStore({
    reducer: {
        apply1: applyReducer,
    },
    devTools: true
})