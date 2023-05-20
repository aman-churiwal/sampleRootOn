import { PASS_UNI } from "../actions/action-types"

const initialState = []

export default (state=initialState, action) => {
    if (action.type === PASS_UNI) {
        console.log("passing uni")
        return [...state,action.payload]
    } else {
        return state
    }
}