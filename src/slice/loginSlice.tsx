import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: ''
}

const loginSlice = createSlice({
    name: "login",
    initialState, 
    reducers: {
        setLoginVals: (state: any, action: any) => {
            const {val, param} = action.payload
            state[param] = val
        }
    }
})

export const { setLoginVals } = loginSlice.actions;
export const showLoginData = (state: any) => state.login;
export default loginSlice.reducer;