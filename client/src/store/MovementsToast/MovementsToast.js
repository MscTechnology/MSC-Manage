import { createSlice } from "@reduxjs/toolkit";


export const MovementsToastSlice = createSlice({
    name: "movementsToast",
    initialState: {
        isTap: true
    },
    reducers: {
        setTap: (state, action) => {
            state.isTap = action.payload;
        }
    }

});


export const {setTap} = MovementsToastSlice.actions;
export default MovementsToastSlice.reducer;