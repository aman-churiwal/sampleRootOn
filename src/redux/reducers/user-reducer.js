import { PASS_USER } from "../actions/action-types"


const initialState = []

export default (state=initialState, action) => {
    if (action.type === PASS_USER) {
        return [...state,action.payload]
    } else {
        return state
    }
}