import { createSlice } from "@reduxjs/toolkit";
import {reduxStateInterface} from "../components/types"

const initialState = {
    searchValue: '',
    search: ''
}

const searchSlice = createSlice({
    name: "search",
    initialState, 
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
            console.log(state);
            
        },
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { setSearchValue, setSearch } = searchSlice.actions;
export const showSearchValue = (state: reduxStateInterface) => {
    console.log(state);
    
    return (state.search.searchValue)
};
export const showSearchData = (state: reduxStateInterface) => state.search;
export default searchSlice.reducer;