import { createSlice } from "@reduxjs/toolkit";


export const LanguageSlice = createSlice({
    name: "language",
    initialState: {
        lang: "tr"
    },
    reducers: {
        setLanguage :   (state, action) => {
            state.lang = action.payload;
        }
    }

});


export const {setLanguage} = LanguageSlice.actions;
export default LanguageSlice.reducer;