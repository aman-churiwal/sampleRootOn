import { createSlice, createSelector } from "@reduxjs/toolkit"

const applySlice = createSlice({
    name: "Apply",
    initialState: [],
    reducers: {
        addUser(state, action) {
            console.log("Add User Called")
            state.push(action.payload)
            console.log(action.payload)
            console.log(state)
        },
    },
});

export const getUserSelector = createSelector(
    (state) => state.apply1,
    (state) => state
)

export default applySlice.reducer

export const {addUser} = applySlice.actions