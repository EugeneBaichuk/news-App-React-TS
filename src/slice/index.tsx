import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import searchReducer from "./searchSlice";
import activeCardReducer from "./activeCardSlice";
import searchSliceReducer from "./activeCardSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        search: searchReducer,
        activeCard: activeCardReducer,
        addBlogCardSlice: searchSliceReducer
    }
});