import { createSlice, createSelector } from "@reduxjs/toolkit"

const applySlice = createSlice({
    name: "Apply",
    initialState: [{ fName: "Aman", lName: "Churiwal", gender: "Male", email:"amanchuriwal22@gmail.com"}],
    reducers: {
        addUser: (state, action) => {
            state.push(...state, action.payload)
        },
    },
});

export const getUserSelector = createSelector(
    (state) => state.apply1,
    (state) => state
)

export const {addUser} = applySlice.actions

export default applySlice.reducer