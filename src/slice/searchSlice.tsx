import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    search: ''
}

const searchSlice = createSlice({
    name: "search",
    initialState, 
    reducers: {
        setSearchValue: (state: any, action: any) => {
            state.searchValue = action.payload
        },
        setSearch: (state: any, action: any) => {
            state.search = action.payload
        }
    }
})

export const { setSearchValue, setSearch } = searchSlice.actions;
export const showSearchValue = (state: any) => state.search.searchValue;
export const showSearchData = (state: any) => state.search;
export default searchSlice.reducer;