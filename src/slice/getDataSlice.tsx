import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const getDataSlice = createSlice({
    name: "getData",
    initialState, 
    reducers: {
        getData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { getData } = getDataSlice.actions;
export const showData = (state: any) => state.getData.data;
export default getDataSlice.reducer;