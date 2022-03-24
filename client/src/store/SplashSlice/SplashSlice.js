import { createSlice } from '@reduxjs/toolkit'



export const SplashSlice = createSlice({
    name: 'splash',
    initialState: {
        isLoading: false,
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    },
});
export const { setLoading } = SplashSlice.actions;
export  default SplashSlice.reducer;