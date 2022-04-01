import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";



export const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: [],
        userOutDate: [],
        isPersonel: false,
        isAdmin: false,
        isActive:true,
    },  
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isPersonel = true;
            state.isAdmin = false;
            state.isActive = true;
        },
        setAdmin: (state, action) => {
            state.user = action.payload;
            state.isAdmin = true;
            state.isPersonel = false;
        },
        setActive: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const {setUser,setAdmin,setActive} = UserSlice.actions;
export default UserSlice.reducer;