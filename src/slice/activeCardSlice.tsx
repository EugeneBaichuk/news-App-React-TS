import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeCard: {}
}

const activeCardSlice = createSlice({
    name: "activeCard",
    initialState, 
    reducers: {
        setActiveCard: (state: any, action: any) => {
            state.activeCard = action.payload
        }
    }
})

export const { setActiveCard } = activeCardSlice.actions;
export const showActiveCard = (state: any) => state.activeCard.activeCard;
export default activeCardSlice.reducer;