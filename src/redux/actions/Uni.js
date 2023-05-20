import { PASS_UNI } from "./action-types"

export const passUni = (uniName) => ({
    type: PASS_UNI,
    payload: uniName
})