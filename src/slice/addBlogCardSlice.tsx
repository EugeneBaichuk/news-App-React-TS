import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 100,
    name: "",
    img: 'https://i.pinimg.com/736x/99/c7/f8/99c7f8a1584e2d98434eaa9fdc8a7a84.jpg',
    descr: ""
}

const addBlogCardSlice = createSlice({
    name: "addBlogCardSlice",
    initialState, 
    reducers: {
        setAddBlogCardSlice: (state: any, action: any) => {
            state.addBlogCardSlice = action.payload
        }
    }
})

export const { setAddBlogCardSlice } = addBlogCardSlice.actions;
export const showAddBlogCardSlice = (state: any) => state.addBlogCardSlice;
export default addBlogCardSlice.reducer;