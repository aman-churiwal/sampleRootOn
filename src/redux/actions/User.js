import { PASS_USER } from "./action-types";

export const passUser = (fName, lName, gender, email) => ({
    type: PASS_USER,
    payload: {firstName: fName, lastName: lName, gender: gender, email: email}
})