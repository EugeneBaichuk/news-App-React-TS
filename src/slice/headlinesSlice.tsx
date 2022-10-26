import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headlines: "general"
}

const headlinesSlice = createSlice({
    name: "headlines",
    initialState, 
    reducers: {
        setHeadlines: (state: any, action: any) => {
            state.activeCard = action.payload
        }
    }
})

export const { setHeadlines } = headlinesSlice.actions;
export const showActiveCard = (state: any) => state.headlines.headlines;
export default headlinesSlice.reducer;