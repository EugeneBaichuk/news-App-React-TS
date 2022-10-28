import { createSlice } from "@reduxjs/toolkit";
import {reduxStateInterface} from "../components/types"

const initialState = {
    activeCard: {}
}

const activeCardSlice = createSlice({
    name: "activeCard",
    initialState, 
    reducers: {
        setActiveCard: (state, action) => {
            state.activeCard = action.payload
        }
    }
})

export const { setActiveCard } = activeCardSlice.actions;
export const showActiveCard = (state: reduxStateInterface) => state.activeCard.activeCard;
export default activeCardSlice.reducer;